export const getGifs = async(cat) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=EsyO45JEDtpeBlpGKyrb66TJ3djPvaiM&q=${cat}&limit=5`;
    const res = await fetch(url);
    const { data } = await res.json();
    
    const gifs = data.map(img => {
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}