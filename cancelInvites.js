async function cancelInvites() {

 const inviteCards = [...document.querySelectorAll("li.invitation-card")];

 const findElement = (selector, root = document) => {
  
   return new Promise((resolve) => {
   const checkInterval = setInterval(() => {
    const elem = root.querySelector(selector);

    if (elem) {
     clearInterval(checkInterval);
     resolve(elem);
    }
   }, 100);
  });
 };

 const pause = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

 for (let card of inviteCards) {
  const actionButton = card.querySelector("span.artdeco-button__text");
  if (actionButton) {
   actionButton.click();
   const confirmBtn = await findElement(
    'button[class*="primary"] > span.artdeco-button__text'
   );

   confirmBtn.click();
    await pause(Math.random() * 2500 + 500);
  }
 }
}

cancelInvites();
