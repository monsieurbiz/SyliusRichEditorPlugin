# Tag Filtering Behavior for UI Elements

## Overview

The Rich Editor plugin supports filtering UI elements based on tags. This allows you to control which UI elements are available in different contexts (e.g., showing only blog-related elements in a blog context, or hiding deprecated elements).

## How Tag Filtering Works

### Basic Concepts

1. **Manager Tags**: Tags configured on the Rich Editor field (via `data-tags` attribute)
2. **Element Tags**: Tags assigned to individual UI elements in their configuration
3. **Inclusion Tags**: Tags without a prefix (e.g., `product`) - elements MUST have these tags to be shown
4. **Exclusion Tags**: Tags with a `-` prefix (e.g., `-deprecated`) - elements with these tags are HIDDEN

### Filtering Logic

The filtering logic follows these rules:

1. **No Manager Tags**: All elements are allowed (no filtering)

2. **Inclusion Tags Only** (Exclusive Mode):
   - If manager has any tag without `-` prefix, we're in "exclusive mode"
   - By default, all elements are DENIED
   - Elements are ALLOWED only if they have at least one matching inclusion tag
   - Example: Manager tags `['product']` → only elements with `product` tag are shown

3. **Exclusion Tags Only** (Permissive Mode):
   - If manager has only tags with `-` prefix, we're in "permissive mode"
   - By default, all elements are ALLOWED
   - Elements are DENIED only if they have a matching exclusion tag
   - Example: Manager tags `['-deprecated']` → all elements except those with `deprecated` tag are shown

4. **Mixed Tags**:
   - When both inclusion and exclusion tags are present, we're in "exclusive mode"
   - Start by denying all elements (because there are inclusion tags)
   - Elements are processed based on tag matches
   - **Order matters**: Tags are processed in sequence, last match wins
   - Example: Manager tags `['product', '-featured']`
     - Element with `['product']` → ALLOWED (matches inclusion tag)
     - Element with `['featured']` → DENIED (matches exclusion tag)
     - Element with `['category']` → DENIED (doesn't match inclusion tag)
     - Element with `['product', 'featured']` → DENIED (last match is exclusion)

### Examples

#### Example 1: Blog Context
```php
// Show only blog-related elements
$managerTags = ['blog'];

// Results:
// Element with tags ['blog'] → ALLOWED
// Element with tags ['blog', 'text'] → ALLOWED
// Element with tags ['product'] → DENIED
// Element with tags [] → DENIED
```

#### Example 2: Hide Deprecated Elements
```php
// Hide deprecated elements, show everything else
$managerTags = ['-deprecated'];

// Results:
// Element with tags ['deprecated'] → DENIED
// Element with tags ['product'] → ALLOWED
// Element with tags ['product', 'deprecated'] → DENIED
// Element with tags [] → ALLOWED
```

#### Example 3: Product Context, Hide Admin Elements
```php
// Show product elements, but hide admin-only ones
$managerTags = ['product', '-admin'];

// Results:
// Element with tags ['product'] → ALLOWED
// Element with tags ['admin'] → DENIED
// Element with tags ['product', 'admin'] → DENIED (admin exclusion wins)
// Element with tags ['category'] → DENIED (not in inclusion list)
```

#### Example 4: Order Matters
```php
// Include first, then exclude
$managerTags = ['product', '-product'];
// Element with tags ['product'] → DENIED (exclusion processed last)

// Exclude first, then include
$managerTags = ['-product', 'product'];
// Element with tags ['product'] → ALLOWED (inclusion processed last)
```

## Testing

### PHPUnit Tests

The file `tests/Unit/Helper/UiElementTagFilterTest.php` contains comprehensive tests for tag filtering behavior:

- **Basic scenarios**: No tags, empty element tags, single tags
- **Inclusion tags**: Single and multiple inclusion tags
- **Exclusion tags**: Single and multiple exclusion tags
- **Mixed scenarios**: Combination of inclusion and exclusion
- **Order dependency**: Tests that tag order matters (last match wins)
- **Edge cases**: Case sensitivity, + prefix behavior
- **Real-world scenarios**: Blog context, hiding deprecated elements

### Running Tests

```bash
vendor/bin/phpunit tests/Unit/Helper/UiElementTagFilterTest.php
```

Or run all tests:
```bash
vendor/bin/phpunit
```

## Related to Issue #281

These tests were added to help identify issues with tag inclusion/exclusion behavior. The comprehensive test suite covers:

1. All basic filtering scenarios
2. Edge cases that might cause unexpected behavior
3. Real-world use cases that users might encounter

If you're experiencing issues with tag filtering:

1. Check which mode you're in (exclusive vs permissive)
2. Verify tag names match exactly (case-sensitive)
3. Check the order of your tags (last match wins for the same element)
4. Review the test cases to understand expected behavior

## Implementation

### JavaScript (Client-Side)

The tag filtering is implemented in `assets/js/app.js` in the `elementIsAllowed` method:

```javascript
elementIsAllowed(managerTags, elementTags, tagsAreExclusive) {
  let allowed = true;
  if (managerTags.length > 0) {
    allowed = !tagsAreExclusive;
    for (let tagIndex in managerTags) { 
      let realTag = managerTags[tagIndex].replace(/^(-|\+)/, '');
      if (0 <= elementTags.indexOf(realTag)) {
        allowed = !managerTags[tagIndex].startsWith('-');
      }
    }
  }
  return allowed;
}
```

### PHP (Server-Side / Testing)

A PHP implementation is available in `src/Helper/UiElementTagFilter.php` for testing purposes. This mirrors the JavaScript logic exactly.

## Best Practices

1. **Use meaningful tag names**: `blog`, `product`, `admin`, `deprecated`
2. **Be consistent**: Use the same tags across your configuration
3. **Document your tags**: Keep a list of available tags in your project documentation
4. **Test your configuration**: Use the test suite to verify expected behavior
5. **Consider order**: When mixing inclusion and exclusion, remember that order matters

## Troubleshooting

### Elements not showing up?
- Check if you're in exclusive mode (any inclusion tags present)
- Verify element has the required inclusion tags
- Check if element has any exclusion tags that match

### Elements still showing when they shouldn't?
- Verify exclusion tag has `-` prefix
- Check if you have inclusion tags that might override exclusions
- Remember: last matching tag wins

### Unexpected behavior?
- Review the tag order in your manager tags
- Check for typos in tag names (case-sensitive)
- Run the test suite to understand expected behavior
