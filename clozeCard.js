function ClozeCard(text, clozeDeletion) {

  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, clozeDeletion);
  }

  var clozePosition = clozeDelete(text, clozeDeletion);

  this.partial = getPartial(text, clozePosition);

  this.cloze = text.slice(clozePosition[0], clozePosition[1]);

  function getPartial(text, clozePosition) {
    var start = text.slice(0, clozePosition[0]);
    var end = text.slice(clozePosition[1], text.length);
    return start + "..." + end;
  }

  function clozeDelete(text, clozeDeletion) {
    var start = text.indexOf(clozeDeletion);

    if (start !== -1) {
      return [start, start + clozeDeletion.length];
    }
    throw new Error("Cloze deletion not found.");
  }
}

ClozeCard.prototype.displayCard = function displayCard() {
  return this.partial.replace(/\.\.\./, "'" + this.cloze + "'");
};

module.exports = ClozeCard;