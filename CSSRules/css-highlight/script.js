window.onload = () => {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./css-highlight/style.css";
  link.type = "text/css";
  head.append(link);
};

document.body.innerHTML = `
<label>Search within text <input id="query" type="text" /></label>
<article>
  <p>
    Maxime debitis hic, delectus perspiciatis laborum molestiae labore,
    deleniti, quam consequatur iure veniam alias voluptas nisi quo. Dolorem
    eaque alias, quo vel quas repudiandae architecto deserunt quidem, sapiente
    laudantium nulla.
  </p>
  <p>
    Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit
    provident nostrum laboriosam iste, tempore perferendis! Ab porro neque esse
    voluptas libero necessitatibus fugiat, ex, minus atque deserunt veniam
    molestiae tempora? Vitae.
  </p>
  <p>
    Dolorum facilis voluptate eaque eius similique ducimus dignissimos assumenda
    quos architecto. Doloremque deleniti non exercitationem rerum quam alias
    harum, nisi obcaecati corporis temporibus vero sapiente voluptatum est
    quibusdam id ipsa.
  </p>
</article>
`;

const query = document.getElementById("query");
const article = document.querySelector("article");

const treeWalker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
const allTextNodes = [];
let currentNode = treeWalker.nextNode();
while (currentNode) {
  allTextNodes.push(currentNode);
  currentNode = treeWalker.nextNode();
}

query.addEventListener("input", (e) => {
  // return when css highlight api not supported
  if (!CSS.highlights) {
    article.textContent =
      "Your browser does not support CSS custom Highlight api";
    return;
  }

  // if already apply css highlights then first clear it
  CSS.highlights.clear();

  let str = query.value.trim().toLowerCase();
  if (!str) return;

  // iterate all over the text nodes
  const ranges = allTextNodes
    .map((elem) => ({ elem, text: elem.textContent.toLowerCase() }))
    .map(({ elem, text }) => {
      // console.log(text.length)
      let indices = [];
      let startPos = 0;
      while (startPos < text.length) {
        let index = text.indexOf(str, startPos);
        if (index === -1) break;
        indices.push(index);
        startPos = startPos + str.length;
      }
      return indices.map((index) => {
        const range = new Range();
        range.setStart(elem, index);
        range.setEnd(elem, index + str.length);
        console.log(range.toString());
        return range;
      });
    });

  const searchResultHighlights = new Highlight(...ranges.flat());
  CSS.highlights.set("search-results", searchResultHighlights);
});

// let text = 'My name is vikash'
// let index = text.indexOf('i', 0)
// console.log(index)

// Node: ƒ Node()
// NodeFilter: ƒ NodeFilter()
// NodeIterator: ƒ NodeIterator()
// NodeList: ƒ NodeList()
