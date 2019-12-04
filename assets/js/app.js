// Application setup
class MbizCmsFields {
    constructor(config) {
        this.config = config;
        this.debug = this.config.debug;
        this.target = document.querySelector(config.querySelector);
        this.uiElements = this.config.uiElements;
        this.translations = this.config.translations;
        if (this.debug) {
            console.log('Plugin configuration :');
            console.log(this.config);
            console.log('Matched element(s) :');
            console.log(document.querySelectorAll(config.querySelector).length);
        }
    }

    init() {
        this.target.setAttribute('hidden', 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let cms = new MbizCmsFields(monsieurbizCmsPluginConfig);
    cms.init();
});
