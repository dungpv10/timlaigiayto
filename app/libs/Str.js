let Str  = {
    slugify : (str) => {
        return str !== undefined ? str.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '') : '';
    }
};

module.exports = Str;