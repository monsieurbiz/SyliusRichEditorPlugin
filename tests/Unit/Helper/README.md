# UI Element Tag Filter Tests

## Purpose

This directory contains PHPUnit tests for the UI Element tag filtering functionality. These tests were created in response to issue #281 to ensure the tag inclusion/exclusion behavior works correctly and to help identify potential bugs.

## Files

- **UiElementTagFilterTest.php**: Comprehensive test suite for tag filtering logic
- **../../../src/Helper/UiElementTagFilter.php**: PHP implementation of the tag filtering logic (mirrors JavaScript)

## What Do These Tests Cover?

The test suite includes 15 test methods with over 40 assertions covering:

### Basic Scenarios
- No manager tags (all elements allowed)
- Empty element tags with inclusion/exclusion filters
- Single tag inclusion/exclusion

### Complex Scenarios
- Multiple inclusion tags
- Multiple exclusion tags
- Mixed inclusion and exclusion tags
- Tag order dependency (last match wins)

### Edge Cases
- Case sensitivity
- Plus prefix (+) behavior
- Empty arrays

### Real-World Use Cases
- Blog context filtering
- Hiding deprecated elements
- Product context with admin exclusion

## Running the Tests

```bash
# Run just these tests
vendor/bin/phpunit tests/Unit/Helper/UiElementTagFilterTest.php

# Run with verbose output
vendor/bin/phpunit --testdox tests/Unit/Helper/UiElementTagFilterTest.php

# Run a specific test method
vendor/bin/phpunit --filter testTagOrderMatters tests/Unit/Helper/UiElementTagFilterTest.php
```

Expected output when all tests pass:
```
PHPUnit 10.x.x

.............                                                     15 / 15 (100%)

Time: 00:00.123, Memory: 10.00 MB

OK (15 tests, 43 assertions)
```

## Understanding the Tag Filtering Logic

### Key Concepts

1. **Manager Tags**: Tags set on the Rich Editor field (`data-tags` attribute)
2. **Element Tags**: Tags assigned to UI elements in configuration
3. **Inclusion Tags**: Regular tags (e.g., `product`) - elements MUST match to show
4. **Exclusion Tags**: Tags with `-` prefix (e.g., `-admin`) - elements matching are HIDDEN

### Filtering Modes

**Exclusive Mode** (when any inclusion tag exists):
- Default: Deny all elements
- Show only elements matching inclusion tags
- Hide elements matching exclusion tags

**Permissive Mode** (when only exclusion tags exist):
- Default: Allow all elements
- Hide only elements matching exclusion tags

### Important Behaviors

1. **Order Matters**: Tags are processed sequentially, last match wins
2. **Case Sensitive**: `product` ≠ `Product`
3. **Empty Elements**: Elements without tags are denied in exclusive mode

## Example Test Cases

### Test: Single Inclusion Tag
```php
// Manager wants only 'product' elements
$this->assertTrue(
    UiElementTagFilter::isElementAllowed(['product'], ['product'])
);
// Element with 'product' tag is allowed

$this->assertFalse(
    UiElementTagFilter::isElementAllowed(['product'], ['category'])
);
// Element with 'category' tag is denied
```

### Test: Tag Order Matters
```php
// Include then exclude
$this->assertFalse(
    UiElementTagFilter::isElementAllowed(['product', '-product'], ['product'])
);
// Result: DENIED (exclusion processed last)

// Exclude then include
$this->assertTrue(
    UiElementTagFilter::isElementAllowed(['-product', 'product'], ['product'])
);
// Result: ALLOWED (inclusion processed last)
```

## Common Issues and Solutions

### Issue: Elements not showing up
- Check if you're in exclusive mode (any inclusion tag present)
- Verify element has required tags
- Check tag casing (case-sensitive)

### Issue: Wrong elements showing
- Verify exclusion tags have `-` prefix
- Check tag order (last match wins)
- Ensure tag names are spelled correctly

### Issue: Generic elements hidden
- In exclusive mode, elements without tags are hidden
- Solution: Tag generic elements or include them explicitly

## Adding New Tests

When adding new tests:

1. Follow the existing naming convention: `test{Scenario}()`
2. Add descriptive docblocks explaining what's being tested
3. Use meaningful variable names
4. Group related assertions together
5. Test both positive and negative cases

Example:
```php
/**
 * Test your new scenario
 */
public function testYourNewScenario(): void
{
    // Arrange
    $managerTags = ['your', 'tags'];
    $elementTags = ['element', 'tags'];
    
    // Act & Assert
    $this->assertTrue(
        UiElementTagFilter::isElementAllowed($managerTags, $elementTags)
    );
}
```

## Related Documentation

- `docs/tag-filtering.md`: Complete guide to tag filtering behavior
- `docs/ISSUE_281_ANALYSIS.md`: Analysis of potential issues and bugs
- `assets/js/app.js`: JavaScript implementation (lines 766-779)

## Continuous Integration

These tests should be run as part of the CI/CD pipeline to ensure:
- No regressions when modifying tag filtering logic
- Consistent behavior across PHP versions
- Documentation stays accurate

## Questions or Issues?

If you find edge cases not covered by these tests, please:
1. Add a test for the edge case
2. Update the documentation
3. Create an issue if it reveals a bug

## License

Same as the main project - see LICENSE.txt
