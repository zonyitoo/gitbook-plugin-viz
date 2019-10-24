const Viz = require('viz.js/viz.js');
const { Module, render } = require('viz.js/full.render.js');

let viz = new Viz({ Module, render });
let visRx = /^```(viz|graphviz)((.*[\r\n]+)+?)?```$/im;
let Render = function(viz, vizContent) {
  return viz.renderString(vizContent).then(result => {return result});
}

module.exports = {
  hooks: {
    'page:before': async function processVizBlockList(page) {
      let match;
      while ((match = visRx.exec(page.content))) {
        let rawBlock = match[0];
        let vizContent = match[2];
        try {
            let data = await Render(viz, vizContent);
            // hardcode remove xml DOCTYPE
            data = data.substring(154);
            page.content = page.content.replace(rawBlock, data);
        } catch (err) {
            console.log(err);
            return page;
        }
      }
      return page;
    }
  }
};
