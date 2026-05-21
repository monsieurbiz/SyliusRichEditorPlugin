<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE.txt
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Tests\Unit\Helper;

use MonsieurBiz\SyliusRichEditorPlugin\Helper\UiElementTagFilter;
use PHPUnit\Framework\TestCase;

/**
 * Test the tag filtering logic for UI elements.
 * This tests the inclusion/exclusion behavior based on tags.
 */
class UiElementTagFilterTest extends TestCase
{
    /**
     * Test with no manager tags - all elements should be allowed
     */
    public function testNoManagerTagsAllowsAllElements(): void
    {
        $this->assertTrue(UiElementTagFilter::isElementAllowed([], []));
        $this->assertTrue(UiElementTagFilter::isElementAllowed([], ['product']));
        $this->assertTrue(UiElementTagFilter::isElementAllowed([], ['product', 'category']));
    }

    /**
     * Test with empty element tags when manager has inclusion tags
     */
    public function testEmptyElementTagsWithInclusionTags(): void
    {
        // When manager has inclusion tags (no - prefix), elements without tags should be denied
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product'], []));
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product', 'category'], []));
    }

    /**
     * Test with empty element tags when manager has exclusion tags
     */
    public function testEmptyElementTagsWithExclusionTags(): void
    {
        // When manager has only exclusion tags (- prefix), elements without tags should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['-product'], []));
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['-product', '-category'], []));
    }

    /**
     * Test single inclusion tag matching
     */
    public function testSingleInclusionTagMatching(): void
    {
        // Element with 'product' tag should be allowed when manager includes 'product'
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['product'], ['product']));
        
        // Element with 'category' tag should NOT be allowed when manager includes only 'product'
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product'], ['category']));
        
        // Element with multiple tags including 'product' should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['product'], ['product', 'category']));
    }

    /**
     * Test single exclusion tag matching
     */
    public function testSingleExclusionTagMatching(): void
    {
        // Element with 'product' tag should be denied when manager excludes 'product'
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['-product'], ['product']));
        
        // Element with 'category' tag should be allowed when manager excludes only 'product'
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['-product'], ['category']));
        
        // Element with both tags should be denied if one is excluded
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['-product'], ['product', 'category']));
    }

    /**
     * Test multiple inclusion tags
     */
    public function testMultipleInclusionTags(): void
    {
        // Element with 'product' should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['product', 'category'], ['product']));
        
        // Element with 'category' should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['product', 'category'], ['category']));
        
        // Element with both should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['product', 'category'], ['product', 'category']));
        
        // Element with neither should be denied
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product', 'category'], ['other']));
    }

    /**
     * Test multiple exclusion tags
     */
    public function testMultipleExclusionTags(): void
    {
        // Element with 'product' should be denied
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['-product', '-category'], ['product']));
        
        // Element with 'category' should be denied
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['-product', '-category'], ['category']));
        
        // Element with both should be denied
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['-product', '-category'], ['product', 'category']));
        
        // Element with neither should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['-product', '-category'], ['other']));
    }

    /**
     * Test mixed inclusion and exclusion tags
     */
    public function testMixedInclusionAndExclusionTags(): void
    {
        // Include 'product' but exclude 'category'
        // Element with only 'product' should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['product', '-category'], ['product']));
        
        // Element with only 'category' should be denied (excluded)
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product', '-category'], ['category']));
        
        // Element with both 'product' and 'category' - last match wins
        // Since we process tags in order and 'category' is excluded, it should be denied
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product', '-category'], ['product', 'category']));
        
        // Element with neither should be denied (not in inclusion list)
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product', '-category'], ['other']));
    }

    /**
     * Test order of tags matters - last match wins
     */
    public function testTagOrderMatters(): void
    {
        // Include product first, then exclude it - should be denied
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product', '-product'], ['product']));
        
        // Exclude product first, then include it - should be allowed
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['-product', 'product'], ['product']));
    }

    /**
     * Test with + prefix (should work same as no prefix)
     */
    public function testPlusPrefixBehavior(): void
    {
        // +product should work like product (inclusion)
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['+product'], ['product']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['+product'], ['category']));
    }

    /**
     * Test complex scenarios
     */
    public function testComplexScenarios(): void
    {
        // Scenario 1: Include multiple, exclude one specific
        // Include 'product' and 'category', but exclude 'featured'
        $managerTags = ['product', 'category', '-featured'];
        
        $this->assertTrue(UiElementTagFilter::isElementAllowed($managerTags, ['product']));
        $this->assertTrue(UiElementTagFilter::isElementAllowed($managerTags, ['category']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed($managerTags, ['featured']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed($managerTags, ['product', 'featured']));
        
        // Scenario 2: Exclude all except specific ones
        // This is tricky - having inclusion tags means exclusive mode
        $managerTags2 = ['-admin', 'product'];
        $this->assertTrue(UiElementTagFilter::isElementAllowed($managerTags2, ['product']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed($managerTags2, ['admin']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed($managerTags2, ['category'])); // Not in inclusion list
    }

    /**
     * Test real-world use case: Blog context
     */
    public function testBlogContextScenario(): void
    {
        // In a blog context, we want elements tagged with 'blog'
        $blogManagerTags = ['blog'];
        
        $this->assertTrue(UiElementTagFilter::isElementAllowed($blogManagerTags, ['blog']));
        $this->assertTrue(UiElementTagFilter::isElementAllowed($blogManagerTags, ['blog', 'text']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed($blogManagerTags, ['product']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed($blogManagerTags, []));
    }

    /**
     * Test real-world use case: Hide specific elements
     */
    public function testHideSpecificElementsScenario(): void
    {
        // We want to hide elements with 'deprecated' tag
        $managerTags = ['-deprecated'];
        
        $this->assertFalse(UiElementTagFilter::isElementAllowed($managerTags, ['deprecated']));
        $this->assertTrue(UiElementTagFilter::isElementAllowed($managerTags, ['product']));
        $this->assertTrue(UiElementTagFilter::isElementAllowed($managerTags, []));
        $this->assertFalse(UiElementTagFilter::isElementAllowed($managerTags, ['product', 'deprecated']));
    }

    /**
     * Test case sensitivity
     */
    public function testCaseSensitivity(): void
    {
        // Tags should be case-sensitive
        $this->assertTrue(UiElementTagFilter::isElementAllowed(['product'], ['product']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['product'], ['Product']));
        $this->assertFalse(UiElementTagFilter::isElementAllowed(['Product'], ['product']));
    }
}
