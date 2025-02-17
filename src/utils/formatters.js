export const fixSwedishCharacters = (text) => {
    return text.replace(/ö/g, 'ö').replace(/ä/g, 'ä').replace(/å/g, 'å');
};