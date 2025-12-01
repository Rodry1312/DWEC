import PostCollection from "./PostCollection.js";

const form = document.getElementById("form");
const name = document.getElementById("name");
const description = document.getElementById("description");
const url = document.getElementById("imgURL");
const birthDate = document.getElementById("birthDate");
const price = document.getElementById("price");
const petCode = document.getElementById("petCode");
const sold = document.getElementById("sold");
const postsDiv = document.getElementById("posts");
const formButton = document.querySelector("form button");
const seedBtn = document.getElementById("seedBtn");
const clearBtn = document.getElementById("clearBtn");

let editFlag = false;
let postIdToUpdate;

// Create a persistent collection. If LocalStorage has data under the key 'pets', it will be loaded.
const postList = new PostCollection([], "pets");

console.log(postList.getAllPosts());

const deletePost = (id) => {
  console.log("Delete post: " + id);
  postList.deletePost(id);
  displayPosts(postList.getAllPosts());
};

const editPost = (id) => {
  console.log("Edit post: " + id);
  editFlag = true;
  postIdToUpdate = id;

  let postInfo = postList.getPostById(id);

  name.value = postInfo.name;
  description.value = postInfo.description;
  url.value = postInfo.imgURL;
  birthDate.value = postInfo.birthDate;
  price.value = postInfo.price;
  petCode.value = postInfo.petCode;
  sold.checked = postInfo.sold;

  formButton.textContent = "Update";
};

const updatePost = (postId) => {
  console.log("Update post: " + postId);

  const updatedPost = {
    id: Number(postId),
    name: name.value,
    description: description.value,
    imgURL: url.value,
    birthDate: birthDate.value,
    price: price.value,
    petCode: petCode.value,
    sold: sold.checked,
  };
  postList.updatePost(updatedPost);
  editFlag = false;
  formButton.textContent = "Add Pet";
  displayPosts(postList.getAllPosts());
};

function displayPosts(posts) {
  postsDiv.innerHTML = "";
  if (!posts || posts.length === 0) {
    postsDiv.innerHTML = `<div style="padding: 10px; color: #666;">No pets registered yet — usa "Add Pet" para crear uno o pulsa "Add sample pets" para probar.</div>`;
    return;
  }
  posts.forEach((post) => {
    postsDiv.innerHTML += `
    <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
      <img src="${post.imgURL}" alt="${post.name}" style="width:100px; height:100px; object-fit: cover;">
      <h4>${post.name} (${post.petCode})</h4>
      <p>${post.description}</p>
      <p><strong>Born:</strong> ${post.birthDate}</p>
      <p><strong>Price:</strong> $${post.price}</p>
      <p><strong>Sold:</strong> ${post.sold ? "Yes" : "No"}</p>
      <span class="options">
        <i data-id="${post.id}" class="fas fa-edit"></i>
        <i data-id="${post.id}" class="fas fa-trash-alt"></i>
      </span>
    </div>`;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  if (formValidation()) {
    if (editFlag === false) {
      const newPost = {
        id: Date.now(),
        name: name.value,
        description: description.value,
        imgURL: url.value,
        birthDate: birthDate.value,
        price: price.value,
        petCode: petCode.value,
        sold: sold.checked,
      };

      let newPostId = postList.addNewPost(newPost);

      if (newPostId) {
        console.log(`Post created successfully with id ${newPostId}`);
        console.log(postList.getAllPosts());
      }
    } else {
      updatePost(postIdToUpdate);
    }

    form.reset();
    displayPosts(postList.getAllPosts());
  }
});

function markFieldAsNotValid(field, message) {
  const formGroup = field.closest(".form-group");
  if (!formGroup) return;
  formGroup.classList.add("invalid");
  const errorDiv = formGroup.querySelector(".error-message");
  if (errorDiv) {
    errorDiv.textContent = message || "This field is invalid.";
    errorDiv.style.display = "block";
  }
}

function markFieldAsValid(field) {
  const formGroup = field.closest(".form-group");
  if (!formGroup) return;
  formGroup.classList.remove("invalid");
  const errorDiv = formGroup.querySelector(".error-message");
  if (errorDiv) {
    errorDiv.style.display = "none";
    errorDiv.textContent = "";
  }
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function formValidation() {
  var isValid = true;

  if (name.value.trim().length < 1) {
    markFieldAsNotValid(name, "Input a name.");
    isValid = false;
  } else {
    markFieldAsValid(name);
  }

  if (description.value === "") {
    markFieldAsNotValid(description, "Description is required");
    isValid = false;
  } else {
    markFieldAsValid(description);
  }

  if (url.value === "") {
    markFieldAsNotValid(url, "URL is required");
    isValid = false;
  } else if (!isValidURL(url.value)) {
    markFieldAsNotValid(url, "Please provide a valid image url.");
    isValid = false;
  } else {
    markFieldAsValid(url);
  }

  if (birthDate.value === "") {
    markFieldAsNotValid(birthDate, "Birthdate is required.");
    isValid = false;
  } else if (!isValidAge(birthDate.value)) {
    markFieldAsNotValid(birthDate, "Invalid birthdate.");
    isValid = false;
  } else {
    markFieldAsValid(birthDate);
  }

  if (price.value === "") {
    markFieldAsNotValid(price, "Price is required.");
    isValid = false;
  } else if (!isValidPrice(price.value)) {
    markFieldAsNotValid(price, "The price cant be 0 or less.");
    isValid = false;
  } else {
    markFieldAsValid(price);
  }

  if (petCode.value === "") {
    markFieldAsNotValid(petCode, "Pet Code is required.");
    isValid = false;
  } else if (!isValidCode(petCode.value)) {
    markFieldAsNotValid(petCode, "The pet code must be 3 letters and 3 numbers (e.g., AAA123).");
    isValid = false;
  } else {
    markFieldAsValid(petCode);
  }

  return isValid;
}

function isValidAge(dateString) {
  const birthDateValue = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return birthDateValue.getTime() <= today.getTime();
}

function isValidPrice(price) {
  return Number(price) > 0;
}

function isValidCode(petCode) {
  const petcodeRegex = /^[A-Z]{3}[0-9]{3}$/;
  return petcodeRegex.test(petCode);
}

postsDiv.addEventListener("click", (ev) => {
  console.log("Click inside posts div");
  const actionBtn = ev.target;
  if (actionBtn.classList.contains("fa-edit")) {
    editPost(actionBtn.dataset.id);
  } else if (actionBtn.classList.contains("fa-trash-alt")) {
    deletePost(actionBtn.dataset.id);
  }
});

displayPosts(postList.getAllPosts());

// Seed helper: add a couple of sample pets to LocalStorage so the user can try quickly
seedBtn.addEventListener("click", () => {
  const existing = postList.getAllPosts();
  if (existing && existing.length) {
    alert("Ya hay mascotas guardadas. Borra todo antes si quieres volver a sembrar datos de ejemplo.");
    return;
  }

  const samples = [
    {
      id: Date.now(),
      name: "Lulu",
      description: "A friendly little pup",
      imgURL: "https://place-puppy.com/200x200",
      birthDate: "2021-06-15",
      price: 120,
      petCode: "DOG001",
      sold: false,
    },
    {
      id: Date.now() + 1,
      name: "Milo",
      description: "Energetic kitten",
      imgURL: "https://placekitten.com/200/200",
      birthDate: "2022-01-04",
      price: 80,
      petCode: "CAT001",
      sold: false,
    },
  ];

  samples.forEach((s) => postList.addNewPost(s));
  displayPosts(postList.getAllPosts());
});

// Clear LocalStorage and UI
clearBtn.addEventListener("click", () => {
  if (!confirm("¿Seguro que quieres eliminar todas las mascotas guardadas?")) return;
  postList.clearAll();
  displayPosts(postList.getAllPosts());
});