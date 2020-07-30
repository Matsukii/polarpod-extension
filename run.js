chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });

    chrome.contextMenus.onClicked.addListener((data, tab) =>{
        console.log(data);

        let url = `https://polarpod.herokuapp.com`

        if(/ogtags|cleanfb|video|thumb/gi.test(data.menuItemId)){
            
            // temp, for thumbnails
            // ! add redirect to open image after get thumb link on API
            if(/thumb/gi.test(data.menuItemId)){
                url += `/${data.menuItemId}?u=${data.linkUrl}`
            }
            else{
                url += `/${data.menuItemId}?url=${data.linkUrl}`

            }
        }
      

        chrome.tabs.create({url: url, index: tab.index + 1});
    });


    // MAIN menu item
    chrome.contextMenus.create({
        id: "polar-main",
        title: "Polarpod",
        contexts:['selection', 'link']
        
    });

    // cleanfb
    chrome.contextMenus.create({
        id: "cleanfb",
        parentId:'polar-main',
        title: "Clean facebook link",
        contexts:['selection', 'link']
        
    });

    // ogtags
    chrome.contextMenus.create({
        id: "ogtags",
        parentId:'polar-main',
        title: "Get Og tags",
        contexts:['selection', 'link']
        
    });

    // video
    chrome.contextMenus.create({
        id: "video",
        parentId:'polar-main',
        title: "Video meta",
        contexts:['selection', 'link']
        
    });

    // ogtags
    chrome.contextMenus.create({
        id: "apis/video/thumb",
        parentId:'polar-main',
        title: "Video thumbnail",
        contexts:['selection', 'link']
        
    });


});