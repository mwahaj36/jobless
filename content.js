chrome.storage.local.get('censorEnabled', (data) => {
  if (data.censorEnabled === false) return;

  const censoredWords = [
    "job", "jobs", "employment", "career", "careers", "hiring", "hire", "hired", "recruit", "recruitment", "recruiter", "vacancy", "vacancies", "position", "positions", "opportunity", "opportunities", "intern", "interns", "internship", "internships", "opening", "openings", "apply", "full-time", "full time", "part-time", "part time", "joblessplace", "employer", "employers", "headhunt", "headhunter", "headhunting", "certificate", "certification"
  ];

  function censor(word) {
    if (word.length <= 3) return word[0] + '*' + word[word.length - 1];
    const first = word[0];
    const last = word[word.length - 1];
    const middle = '*'.repeat(Math.floor(word.length / 2));
    return first + middle + last;
  }

  function censorTextNode(textNode) {
    const text = textNode.nodeValue;
    let matchFound = false;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;

    const regex = new RegExp(`(${censoredWords.join("|")})`, "gi");
    let match;
    while ((match = regex.exec(text)) !== null) {
      matchFound = true;

      fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));

      const span = document.createElement("span");
      span.className = "censored";
      span.title = match[0];
      span.textContent = censor(match[0]);
      fragment.appendChild(span);

      lastIndex = regex.lastIndex;
    }

    if (matchFound) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      textNode.parentNode.replaceChild(fragment, textNode);
    }
  }

  function scan(node) {
    if (
      node.nodeType === Node.TEXT_NODE &&
      node.parentNode &&
      !["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentNode.nodeName)
    ) {
      censorTextNode(node);
    } else {
      for (let child of node.childNodes) {
        scan(child);
      }
    }
  }

  scan(document.body);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        scan(node);
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

console.log("hiree me");
