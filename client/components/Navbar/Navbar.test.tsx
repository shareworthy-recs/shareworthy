describe('this test should fail', () => {
  test('2 + 2 ≠ 5', () => {
    const fail = 2 + 2;
    expect(value).toBe(5);
  });
});

describe('this test should pass', () => {
    test('2 + 2 = 4', () => {
      const fail = 2 + 2;
      expect(value).toBe(4);
    });
  });

describe('home link', () => {
  test('should navigate to ... when link is clicked', () => {
    const { getByText } = render(<a href="https://test.com">Shareworthy</a>);

    const link = getByText('Shareworthy');

    fireEvent.click(link);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.shareworthy.com'
    );
  });
});
