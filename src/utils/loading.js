

// Helper function to load a set of objects into a game!
export const loadAllImages = async (imageList) => {

    // Promise all to load all images 
    let loadedImages = {};

    await Promise.all(
        imageList.map( async imageUrl => {

            let imageData = await loadImage(imageUrl);
            loadedImages[imageUrl] = imageData;
        })
    )

    return loadedImages;


}

export const loadImage = async (imageUrl) => {

    return new Promise( (resolve, reject) => {

        let img = new Image();

        img.onload = () => resolve(img);

        img.src = imageUrl;

    })

    

}