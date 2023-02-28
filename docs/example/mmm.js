if (
  response &&
  response.choices &&
  response.choices.length > 0 &&
  response.choices[0].text
) {
  return {
    from: from,
    to: to,
    text: response.choices[0].text,
  };
} else {
  throw new Error("server response invalid");
}
