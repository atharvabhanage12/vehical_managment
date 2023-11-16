import { vehical_managment_backend } from "../../declarations/vehical_managment_backend";

// Initialize an empty array to store the images
let imageArray = [];
var ww;
var lele;
// Function to convert an image to an integer array
function imageToIntArray(imageElement) {
  imageArray=[];
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  console.log("Enntered Image to INTARRAY")
  // Set the canvas size to match the image dimensions
  canvas.width = imageElement.width;
  canvas.height = imageElement.height;
  ww= canvas.width ;
  lele= canvas.height;
  console.log("ww-> " ,ww, "lele-> ", lele," { ",imageElement.width, " } {",imageElement.height);

  // Make sure the image is fully loaded
  if (imageElement.complete) {
    // Draw the image on the canvas
    context.drawImage(imageElement, 0, 0);

    // Get the pixel data from the canvas
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // Convert pixel data to an integer array
    const intArray = [];
    for (let i = 0; i < imageData.length; i += 4) {
      // Combine RGBA values into a single integer
      const pixelValue = (imageData[i] << 24) | (imageData[i + 1] << 16) | (imageData[i + 2] << 8) | imageData[i + 3];
      intArray.push(pixelValue);
    }
    console.log(intArray.length);
    // console.log(intArray);
    return intArray;
  } else {
    // Handle the case where the image is not fully loaded
    console.error("Image is not fully loaded.");
    return null; // or handle the error as appropriate
  }
}



function intArrayToImageAndSet(intArray, imageContainer) {
  // Create a canvas to draw the image data

  console.log("From convert INTARRY  =-> ",intArray.length);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Determine the dimensions of the image. Assuming intArray is a square image.
  const imageSize = Math.sqrt(intArray.length);

  // Set the canvas size to match the image dimensions
  canvas.width = ww;
  canvas.height = lele;

  // Create an ImageData object from the integer array
  console.log("Tyep fo  ara -> ", typeof intArray[0]);
  
  const imageData = context.createImageData(ww, lele);
  for (let i = 0; i < intArray.length; i++) {
    const pixelValue = Number(intArray[i]);
    // Extract RGBA values from the pixelValue
    imageData.data[i * 4] = (pixelValue >> 24) & 0xFF;        // Red
    imageData.data[i * 4 + 1] = (pixelValue >> 16) & 0xFF;    // Green
    imageData.data[i * 4 + 2] = (pixelValue >> 8) & 0xFF;     // Blue
    imageData.data[i * 4 + 3] = pixelValue & 0xFF;            // Alpha
  }

  // Put the ImageData onto the canvas
  context.putImageData(imageData, 0, 0);

  //document.body.appendChild(canvas);

  // Create a new image element and set its source to the canvas data URL
  const imgElement = new Image();
  imgElement.src = canvas.toDataURL();

  // Append the image element to the specified imageContainer
  imageContainer.appendChild(imgElement);
}




// // Function to handle file input and add images to the array
// function handleImageUpload(event) {
//   const fileInput = document.getElementById('input_image_right');
//   const imageContainer = document.getElementById('imageContainer');

//   // Check if any file is selected
//   if (fileInput.files.length > 0) {
//     const file = fileInput.files[0];

//     // Create a new FileReader to read the file
//     const reader = new FileReader();

//     // Define a callback for when the file is loaded
//     reader.onload = function (e) {
//       const imageUrl = e.target.result;

//       // Create an image element to display the uploaded image
//       const imgElement = document.createElement('img');

//       // Set an onload event to ensure the image is fully loaded before processing
//       imgElement.onload = function () {
//         // Call imageToIntArray to convert the image to an integer array
//         const intArray = imageToIntArray(imgElement);

//         // Add the integer array to the imageArray
//         if (intArray) {
//           imageArray.push(intArray);
//           // Add the image to the container
//           //imageContainer.appendChild(imgElement);
//           //const imageContainer1 = document.getElementById('imageContainer');
//           ww = imgElement.width; // Get the width
//           lele = imgElement.height; // Get the height
//           intArrayToImageAndSet(intArray, imageContainer);

//         }

//         // Clear the file input
//         fileInput.value = '';
//       };

//       imgElement.src = imageUrl;
//     };

//     // Read the file as a data URL (base64)
//     reader.readAsDataURL(file);
//   }
// }

// // Attach the function to the "Add Image" button click event
// const addImageButton = document.getElementById('addImage');
// addImageButton.addEventListener('click', handleImageUpload);



// ////date picker

// document.addEventListener("DOMContentLoaded", function () {
//   const datePicker = document.getElementById("datePicker");
//   const convertDateButton = document.getElementById("convertDate");
//   const resultContainer = document.getElementById("result");

//   convertDateButton.addEventListener("click", function () {
//     const selectedDate = datePicker.value; // Get the selected date in ISO format (YYYY-MM-DD)

//     // Convert the date to DD/MM/YYYY format
//     const dateObj = new Date(selectedDate);
//     const day = dateObj.getDate().toString().padStart(2, "0");
//     const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
//     const year = dateObj.getFullYear();

//     const formattedDate = `${day}/${month}/${year}`;

//     // Display the formatted date
//     resultContainer.textContent = `Formatted Date: ${formattedDate}`;
//   });
// });


// ///model detils

// document.addEventListener("DOMContentLoaded", function () {
//   const mapDetailsInput = document.getElementById("mapDetails");
//   const storeMapButton = document.getElementById("storeMap");
//   const storedDetailsContainer = document.getElementById("storedDetails");

//   storeMapButton.addEventListener("click", function () {
//     const mapDetails = mapDetailsInput.value; // Get the entered map details

//     // Display the stored map details
//     storedDetailsContainer.textContent = `Stored Map Details: ${mapDetails}`;
//   });
// });


// //owner detils
// document.addEventListener("DOMContentLoaded", function () {
//   const ownerDetailsInput = document.getElementById("ownerDetails");
//   const storeOwnerButton = document.getElementById("storeOwner");
//   const storedOwnerDetailsContainer = document.getElementById("storedOwnerDetails");

//   storeOwnerButton.addEventListener("click", function () {
//     const ownerDetails = ownerDetailsInput.value; // Get the entered owner details

//     // Display the stored owner details
//     storedOwnerDetailsContainer.textContent = `Stored Owner Details: ${ownerDetails}`;
//   });
// });




// // . km reading 

// document.addEventListener("DOMContentLoaded", function () {
//   const integerInput = document.getElementById("integerInput");
//   const storeIntegerButton = document.getElementById("storeInteger");
//   const storedIntegerContainer = document.getElementById("storedInteger");

//   storeIntegerButton.addEventListener("click", function () {
//     const enteredInteger = parseInt(integerInput.value, 10); // Parse the input as an integer

//     if (!isNaN(enteredInteger)) {
//       // Display the stored integer
//       storedIntegerContainer.textContent = `Stored Integer: ${enteredInteger}`;
//     } else {
//      // "atharva stays here till code gets dltd"
//       // Handle the case where the input is not a valid integer
//       storedIntegerContainer.textContent = "Please enter a valid integer.";
//     }
//   });
// });


// //vehical name 
// document.addEventListener("DOMContentLoaded", function () {
//   const vehicleNameInput = document.getElementById("vehicleName");
//   const storeVehicleButton = document.getElementById("storeVehicle");
//   const storedVehicleNameContainer = document.getElementById("storedVehicleName");

//   storeVehicleButton.addEventListener("click", function () {
//     const enteredVehicleName = vehicleNameInput.value; // Get the entered vehicle name

//     // Display the stored vehicle name
//     storedVehicleNameContainer.textContent = `Stored Vehicle Name: ${enteredVehicleName}`;
//   });
// });



document.addEventListener("DOMContentLoaded", function ()  {
  const inputForm = document.getElementById("inputForm");

  inputForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get values from input fields
    // const imageRight = document.getElementById("input_image_right").files[0];
    // const imageLeft = document.getElementById("input_image_left").files[0];
    // const imageFront = document.getElementById("input_image_front").files[0];
    // const imageBack = document.getElementById("input_image_back").files[0];
    // const imageAdhaar = document.getElementById("input_image_adhaar_curr_rider").files[0];
    
    const selectedDate = document.getElementById("datePicker").value;
    const mapDetails = document.getElementById("mapDetails").value;
    const ownerDetails = document.getElementById("ownerDetails").value;
    const enteredInteger = parseInt(document.getElementById("integerInput").value, 10);
    const enteredVehicleName = document.getElementById("vehicleName").value;
    const enteredVehicalnumber_store = document.getElementById("vehicalNumberUser_store").value;
    const enteredServicingDetails= document.getElementById("servicingDetails").value;
     
    // Now you can perform actions with the collected data
    // For example, you can upload images and process the form data.

   // Example: Display the values
    
    // console.log("Right Image:", imageToIntArray(imageRight));
    // console.log("Left Image:", imageToIntArray(imageLeft));
    // console.log("Front Image:", imageToIntArray(imageFront));
    // console.log("Back Image:", imageToIntArray(imageBack));
    // console.log("Adhaar Image:", imageToIntArray(imageAdhaar));

    console.log("Selected Date:", selectedDate);
    console.log("Map Details:", mapDetails);
    console.log("Owner Details:", ownerDetails);
    console.log("Entered Integer:", enteredInteger);
    console.log("Vehicle Name:", enteredVehicleName);
    console.log("Vehicle Number:", enteredVehicalnumber_store);

///
const imageRight = document.getElementById("input_image_right").files[0];
    const imageLeft = document.getElementById("input_image_left").files[0];
    const imageFront = document.getElementById("input_image_front").files[0];
    const imageBack = document.getElementById("input_image_back").files[0];
    const imageAdhaar = document.getElementById("input_image_adhaar_curr_rider").files[0];

    // Load images using FileReader and convert to integer arrays
    const loadImageAndConvert = (imageFile) => {
      return new Promise((resolve) => {
        if (imageFile) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const imgElement = new Image();
            imgElement.onload = function () {
              const intArray = imageToIntArray(imgElement);
              resolve(intArray);
            };
            imgElement.src = e.target.result;
          };
          reader.readAsDataURL(imageFile);
        } else {
          resolve(null);
        }
      });
    };

    // Create an array of promises to load and convert images
    const imagePromises = [
      loadImageAndConvert(imageRight),
      loadImageAndConvert(imageLeft),
      loadImageAndConvert(imageFront),
      loadImageAndConvert(imageBack),
      loadImageAndConvert(imageAdhaar),
    ];

    // Wait for all image promises to resolve
    Promise.all(imagePromises).then(async (intArrays) => {
      // Now you can perform actions with the collected data
      // For example, you can upload images and process the form data.

      // Example: Display the values
      console.log("Right Image:", intArrays[0]);
      console.log("Left Image:", intArrays[1]);
      console.log("Front Image:", intArrays[2]);
      console.log("Back Image:", intArrays[3]);
      console.log("Adhaar Image:", intArrays[4]);

      await vehical_managment_backend.register_vehical_details(
        enteredVehicalnumber_store,
        intArrays[2],
        intArrays[3],
        intArrays[0],
        intArrays[1],
        selectedDate,
        mapDetails,
        ownerDetails,
        enteredInteger.toString(),
        intArrays[4],
        enteredVehicleName);

        console.log("Completed uploading to blockcahin ");

        await vehical_managment_backend.print_curr_km(enteredVehicalnumber_store);
        console.log("from blockain vehical nnumber ");
    });
    ////
  });
});

////////

document.getElementById("showResultButton").addEventListener("click", function () {
  var form = document.getElementById("inputForm");
  var resultContainer = document.getElementById("resultContainer");

  if (form.style.display === "block") {
    form.style.display = "none";
    resultContainer.style.display = "block";
  } else {
    form.style.display = "block";
    resultContainer.style.display = "none";
  }
});



////


// //////////

// document.addEventListener("DOMContentLoaded", function () {
//   const inputForm = document.getElementById("inputForm");
//   const collectedDataSection = document.getElementById("collectedData");
//   const vehicleNumberInput = document.getElementById("vehicleNumber");
//   const checkDetailsButton = document.getElementById("checkDetailsButton");

//   checkDetailsButton.addEventListener("click", function () {
//     // Get the entered vehicle number
//     const vehicleNumber = vehicleNumberInput.value;

//     // You can display the vehicle number or perform any additional actions here
//     console.log("Vehicle Number:", vehicleNumber);

//     // Display the "Collected Data" section
//     collectedDataSection.style.display = "block";

//     // You can also clear any previous data displayed here if needed
//   });

//   inputForm.addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the default form submission

//     // Get values from input fields
//     // ...

//     // Example: Display the values in the "Collected Data" section
//     const displayImages = document.getElementById("displayImages");
//     displayImages.innerHTML = `Right Image: ${imageRight}<br> Left Image: ${imageLeft}<br> Front Image: ${imageFront}<br> Back Image: ${imageBack}<br> Adhaar Image: ${imageAdhaar}`;

//     const displayDate = document.getElementById("displayDate");
//     displayDate.textContent = `Selected Date: ${selectedDate}`;

//     const displayMapDetails = document.getElementById("displayMapDetails");
//     displayMapDetails.textContent = `Map Details: ${mapDetails}`;

//     const displayOwnerDetails = document.getElementById("displayOwnerDetails");
//     displayOwnerDetails.textContent = `Owner Details: ${ownerDetails}`;

//     const displayInteger = document.getElementById("displayInteger");
//     displayInteger.textContent = `Entered Integer: ${enteredInteger}`;

//     const displayVehicleName = document.getElementById("displayVehicleName");
//     displayVehicleName.textContent = `Vehicle Name: ${enteredVehicleName}`;

//     // Display images if available
//     const images = [imageRight, imageLeft, imageFront, imageBack, imageAdhaar];
//     const displayImagesDiv = document.getElementById("displayImages");
//     displayImagesDiv.innerHTML = "<h3>Uploaded Images:</h3>";
//     images.forEach((image, index) => {
//       if (image) {
//         const imgElement = document.createElement("img");
//         imgElement.src = URL.createObjectURL(image);
//         imgElement.alt = `Image ${index + 1}`;
//         displayImagesDiv.appendChild(imgElement);
//       }
//     });

//     // Display the "Collected Data" section
//     collectedDataSection.style.display = "block";
//   });
// });


////

document.addEventListener("DOMContentLoaded", async function () {
  const collectedDataSection = document.getElementById("collectedData");
  const checkDetailsButton = document.getElementById("checkDetailsButton");
  
  checkDetailsButton.addEventListener("click", async function () {
    const vehicalNum_txt = document.getElementById("vehicleNumber").value;
    console.log(vehicalNum_txt);
    // Get values from input fields
    const imageRight = await vehical_managment_backend.print_side_R_image(vehicalNum_txt);
    console.log("image_right output -> ",imageRight);
    console.log(typeof imageRight);
    const imageLeft = await vehical_managment_backend.print_side_L_image(vehicalNum_txt);
    const imageFront =await vehical_managment_backend.print_front_image(vehicalNum_txt);
    const imageBack = await vehical_managment_backend.print_back_image(vehicalNum_txt);
    const imageAdhaar = await vehical_managment_backend.print_curr_rider_adhaar(vehicalNum_txt);
    //const imageRight = document.getElementById("input_image_right").files[0];
    




    ////

    intArrayToImageAndSet(imageRight[0],displayImages);
    intArrayToImageAndSet(imageLeft[0],displayImages);
    intArrayToImageAndSet(imageFront[0],displayImages);
    intArrayToImageAndSet(imageBack[0],displayImages);
    intArrayToImageAndSet(imageAdhaar[0],displayImages);
    ///
    const selectedDate =  await vehical_managment_backend.print_last_service(vehicalNum_txt);
        
    const mapDetails = await vehical_managment_backend.print_model_details(vehicalNum_txt);
        
    const ownerDetails = await vehical_managment_backend.print_owner_name(vehicalNum_txt);
    
    const enteredInteger =  await vehical_managment_backend.print_curr_km(vehicalNum_txt);
        
    const enteredVehicleName = await vehical_managment_backend.print_vehical_name(vehicalNum_txt);
        

    // Display images if available
    // const images = [imageRight, imageLeft, imageFront, imageBack, imageAdhaar];
    // const displayImagesDiv = document.getElementById("displayImages");
    // displayImagesDiv.innerHTML = "<h3>Uploaded Images:</h3>";

    // images.forEach((image, index) => {
    //   if (image) {
    //     const imgElement = document.createElement("img");
    //     imgElement.src = URL.createObjectURL(image);
    //     imgElement.alt = `Image ${index + 1}`;
    //     displayImagesDiv.appendChild(imgElement);
    //   }
    // });


    // Display other collected data
    const displayTextData = document.getElementById("displayTextData");
    displayTextData.innerHTML = `
      <p>Selected Date: ${selectedDate}</p>
      <p>Map Details: ${mapDetails}</p>
      <p>Owner Details: ${ownerDetails}</p>
      <p>Entered Integer: ${enteredInteger}</p>
      <p>Vehicle Name: ${enteredVehicleName}</p>
    `;

    // Display the "Collected Data" section
    collectedDataSection.style.display = "block";
  });
});

