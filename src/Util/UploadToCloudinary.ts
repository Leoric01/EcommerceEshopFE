export const uploadToCloudinary = async (pics: File): Promise<string | undefined> => {
    const cloud_name = "dz7uwudvw";
    const upload_preset = "ml_default";
  
    if (pics) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", upload_preset);
      data.append("cloud_name", cloud_name);
  
      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/dz7uwudvw/image/upload", {
          method: "POST",
          body: data,
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const fileData = await res.json();
        return fileData.url; 
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return undefined; 
      }
    } else {
      console.log("Error pics not found");
      return undefined; 
    }
  };