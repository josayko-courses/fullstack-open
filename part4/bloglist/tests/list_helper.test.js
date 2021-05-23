const listHelper = require('../utils/list_helper');

test('dummy returns one', () => {
  const blogs = [];
  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

describe('total likes', () => {
  test('of empty list is zero', () => {
    const blogs = [];
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(0);
  });

  test('when list has only one blog equals the likes of that', () => {
    const blogs = [{ likes: 42 }];
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(42);
  });

  test('of a bigger list is calculated right', () => {
    const blogs = [{ likes: 42 }, { likes: 43 }, { likes: 44 }];
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(42 + 43 + 44);
  });
});
