let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let finish = [".com", ".ve"];

const generateDomain = (first, middle, end, finish) => {
  for (a in first) {
    for (b in middle) {
      for (c in end) {
        for (d in finish)
          console.log(`${first[a]}${middle[b]}${end[c]}${finish[d]}`);
      }
    }
  }
};

generateDomain(pronoun, adj, noun, finish);
