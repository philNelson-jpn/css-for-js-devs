class Main {
    color = 'black'
  }
  class Paragraph extends Main {
    color = 'red'
  }
  class Span extends Paragraph {
  }
  const s = new Span();
  console.log(s.color);

//   This JS code will have the same affect on the HTML elements as the CSS

/* <main style="color: black;">
  <p style="color: red;">
    Hello <span>World</span>
  </p>
</main> */