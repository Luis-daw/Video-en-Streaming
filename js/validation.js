function showFeedBack(input, valid, message) {
    let validClass = (valid) ? 'is-valid' : 'is-invalid';
    let div = (valid) ? input.nextAll("div.validfeedback") : input.nextAll("div.invalid-feedback");
    input.nextAll('div').removeClass('d-block');
    div.removeClass('d-none').addClass('d-block');
    input.removeClass('is-valid is-invalid').addClass(validClass);
    if (message) {
        div.empty();
        div.append(message);
    }
}
function checkFileExtension(file, allowedExtensions) {
    let fileExtension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.some((extension) => {
        return extension === fileExtension
    });
}
function checkFileSize(file, size) {
    return (file.size > size * 1024);
}


function defaultCheckElement(event) {
    this.value = this.value.trim();
    if (!this.checkValidity()) {
        showFeedBack($(this), false);
    } else {
        showFeedBack($(this), true);
    }
}

function newProductionValidation(handler) {
    let form = document.forms.newProductionForm;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        console.log("Entro submit");
        let isValid = true;
        let firstInvalidElement = null;

        // this.title.value = this.title.value.trim();
        // showFeedBack($(this.title), true);
        console.log(this.title.value);
        if (!this.title.checkValidity()) {
            isValid = false;
            showFeedBack($(this.title), false);
            firstInvalidElement = this.title;
        } else {
            showFeedBack($(this.title), true);
        }
        if (!this.publication.checkValidity()) {
            isValid = false;
            showFeedBack($(this.publication), false);
            firstInvalidElement = this.publication;
        } else {
            showFeedBack($(this.publication), true);
        }

        if (!this.nationality.checkValidity()) {
            isValid = false;
            showFeedBack($(this.nationality), false);
            firstInvalidElement = this.nationality;
        } else {
            showFeedBack($(this.nationality), true);
        }
        if (!this.sinopsis.checkValidity()) {
            isValid = false;
            showFeedBack($(this.sinopsis), false);
            firstInvalidElement = this.sinopsis;
        } else {
            showFeedBack($(this.sinopsis), true);
        }
        // if (!this.image.checkValidity()) {
        //     isValid = false;
        //     showFeedBack($(this.image), false);
        //     firstInvalidElement = this.image;
        // } else {
        //     showFeedBack($(this.image), true);
        // }
        let img;
        if (!this.image) {
            img = "../img/" + this.image.files[0];
        }
        else {
            img = "";
        }
        if (!isValid) {
            console.log("Valid falso");
            firstInvalidElement.focus();
        } else {
            console.log("Valid bueno");
            let directors = [];
            let cast = [];
            let categories = [];
            for (const option of this.selectDirectors.options) {
                if (option.selected) {
                    directors.push(option.value);
                }
            }
            for (const option of this.selectActors.options) {
                if (option.selected) {
                    cast.push(option.value);
                }
            }
            for (const option of this.selectCategories.options) {
                if (option.selected) {
                    categories.push(option.value);
                }
            }
            console.log(img);
            handler(this.title.value, this.publication.value, this.nationality.value, this.sinopsis.value, img, directors, cast, categories, "movie");
        }
        event.preventDefault();
        event.stopPropagation();
    });

    // form.addEventListener('reset',(function(event){
    //   let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
    //   feedDivs.removeClass('d-block').addClass('d-none');
    //   let inputs = $(this).find('input');
    //   inputs.removeClass('is-valid is-invalid');
    // }));

    $(form.title).change(defaultCheckElement);
    $(form.publication).change(defaultCheckElement);
    $(form.nationality).change(defaultCheckElement);
    $(form.sinopsis).change(defaultCheckElement);
    $(form.image).change(function (event) {
        let size = 1024;
        let message = "";
        $(this).nextAll('label').text(this.value);
        console.log("Entra change");
        if (!checkFileExtension(this.files[0], ['jpg', 'png', 'gif'])) {
            console.log("Falla extension");
            message = 'Debe seleccionar un archivo con extensión jpg, png o gif.';
            showFeedBack($(this), false, message);
        } else if (checkFileSize(this.files[0], size)) {
            message = `El archivo ${this.files[0].name} no debe ser mayor a ${size}KB`;
            showFeedBack($(this), false, message);
        } else {
            showFeedBack($(this), true, message);
        }
    });
}

function removeProductionValidation(handler) {
    let form = document.forms.removeProductionForm;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        console.log("Entro submit");
        let isValid = true;
        let firstInvalidElement = null;

        // this.title.value = this.title.value.trim();
        // showFeedBack($(this.title), true);
        console.log();
        if (this.selectProductions.value === "") {
            isValid = false;
            showFeedBack($(this.selectProductions), false);
            firstInvalidElement = this.selectProductions;
        } else {
            showFeedBack($(this.title), true);
        }
        if (!isValid) {
            console.log("Valid falso");
            firstInvalidElement.focus();
        } else {
            console.log("Valid bueno");

            let productions = [];

            for (const option of this.selectProductions.options) {
                if (option.selected) {
                    productions.push(option.value);
                }
            }
            handler(productions);
        }
        event.preventDefault();
        event.stopPropagation();
    });

    // form.addEventListener('reset',(function(event){
    //   let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
    //   feedDivs.removeClass('d-block').addClass('d-none');
    //   let inputs = $(this).find('input');
    //   inputs.removeClass('is-valid is-invalid');
    // }));

    $(form.title).change(defaultCheckElement);
    $(form.publication).change(defaultCheckElement);
    $(form.nationality).change(defaultCheckElement);
    $(form.sinopsis).change(defaultCheckElement);
    $(form.image).change(function (event) {
        let size = 1024;
        let message = "";
        $(this).nextAll('label').text(this.value);
        console.log("Entra change");
        if (!checkFileExtension(this.files[0], ['jpg', 'png', 'gif'])) {
            console.log("Falla extension");
            message = 'Debe seleccionar un archivo con extensión jpg, png o gif.';
            showFeedBack($(this), false, message);
        } else if (checkFileSize(this.files[0], size)) {
            message = `El archivo ${this.files[0].name} no debe ser mayor a ${size}KB`;
            showFeedBack($(this), false, message);
        } else {
            showFeedBack($(this), true, message);
        }
    });
}
function assignDeassignPersonValidation(handler) {
    let form = document.forms.removeProductionForm;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        console.log("Entro submit");
        let isValid = true;
        let firstInvalidElement = null;

        // this.title.value = this.title.value.trim();
        // showFeedBack($(this.title), true);
        console.log();
        if (this.selectProductions.value === "") {
            isValid = false;
            showFeedBack($(this.selectProductions), false);
            firstInvalidElement = this.selectProductions;
        } else {
            showFeedBack($(this.title), true);
        }
        if (!isValid) {
            console.log("Valid falso");
            firstInvalidElement.focus();
        } else {
            console.log("Valid bueno");

            let productions = [];

            for (const option of this.selectProductions.options) {
                if (option.selected) {
                    productions.push(option.value);
                }
            }
            handler(productions);
        }
        event.preventDefault();
        event.stopPropagation();
    });

    // form.addEventListener('reset',(function(event){
    //   let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
    //   feedDivs.removeClass('d-block').addClass('d-none');
    //   let inputs = $(this).find('input');
    //   inputs.removeClass('is-valid is-invalid');
    // }));

    $(form.title).change(defaultCheckElement);
    $(form.publication).change(defaultCheckElement);
    $(form.nationality).change(defaultCheckElement);
    $(form.sinopsis).change(defaultCheckElement);
    $(form.image).change(function (event) {
        let size = 1024;
        let message = "";
        $(this).nextAll('label').text(this.value);
        console.log("Entra change");
        if (!checkFileExtension(this.files[0], ['jpg', 'png', 'gif'])) {
            console.log("Falla extension");
            message = 'Debe seleccionar un archivo con extensión jpg, png o gif.';
            showFeedBack($(this), false, message);
        } else if (checkFileSize(this.files[0], size)) {
            message = `El archivo ${this.files[0].name} no debe ser mayor a ${size}KB`;
            showFeedBack($(this), false, message);
        } else {
            showFeedBack($(this), true, message);
        }
    });
}
export { showFeedBack, defaultCheckElement, newProductionValidation, removeProductionValidation, assignDeassignPersonValidation};