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
        if (this.publication.value == "") {
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
        let size = 1024;
        if (this.image.value != "") {
            if (!checkFileExtension(this.image.files[0], ['jpg', 'png', 'gif'])) {
                isValid = false;
                firstInvalidElement = this.image;
                let message = 'Debe seleccionar un archivo con extensión jpg, png o gif.';
                showFeedBack($(this.image), false, message);
            } else if (checkFileSize(this.image.files[0], size)) {
                isValid = false;
                firstInvalidElement = this.image;
                let message = `El archivo ${this.picture.files[0].name} no debe ser mayor a ${size}KB`;
                showFeedBack($(this.image), false, message);
            } else {
                let message = "Imagen bien introducida."
                showFeedBack($(this.image), true, message);
            }
        }
        let img;
        if (this.image.value != "") {
            img = "img/" + this.image.files[0].name;
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
    let form = document.forms.assignDeassignForm;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        console.log();
        if (this.selectTypePerson.value === "") {
            isValid = false;
            showFeedBack($(this.selectTypePerson), false);
            firstInvalidElement = this.selectTypePerson;
        } else {
            showFeedBack($(this.selectTypePerson), true);
        }
        if (this.selectPerson.value === "") {
            isValid = false;
            showFeedBack($(this.selectPerson), false);
            firstInvalidElement = this.selectPerson;
        } else {
            showFeedBack($(this.selectPerson), true);
        } selectHaveProduction
        if (this.selectHaveProduction.value === "" && this.selectNotHaveProduction.value === "") {
            isValid = false;
            showFeedBack($(this.selectHaveProduction), false);
            showFeedBack($(this.selectNotHaveProduction), false);
            firstInvalidElement = this.selectHaveProduction;
        } else {
            showFeedBack($(this.selectHaveProduction), true);
            showFeedBack($(this.selectNotHaveProduction), true);
        }
        console.log(isValid);
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            let haveProductions = [];
            if (this.selectHaveProduction.value != "") {
                for (const option of this.selectHaveProduction.options) {
                    if (option.selected) {
                        haveProductions.push(option.value);
                    }
                }
            } else {
                haveProductions == null;
            }
            let notHaveProductions = [];
            if (this.selectNotHaveProduction.value != "") {
                for (const option of this.selectNotHaveProduction.options) {
                    if (option.selected) {
                        notHaveProductions.push(option.value);
                    }
                }
            } else {
                notHaveProductions == null;
            }

            handler(this.selectTypePerson.value, this.selectPerson.value, haveProductions, notHaveProductions);
        }
        event.preventDefault();
        event.stopPropagation();
    });

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-valid is-invalid');
    }));

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

//Añadir los 2 formularios aqui dentro y hacer la validacion propia de cada uno.
function addRemoveCategoriesValidation(handlerAdd, handlerRem) {

    if (document.forms.addCategory) {
        let form = document.forms.addCategory;
        $(form).attr('novalidate', true);
        $(form).submit(function (event) {
            let isValid = true;
            let firstInvalidElement = null;

            if (!this.name.checkValidity()) {
                isValid = false;
                showFeedBack($(this.name), false);
                firstInvalidElement = this.name;
            } else {
                showFeedBack($(this.name), true);
            }
            if (!this.description.checkValidity()) {
                isValid = false;
                showFeedBack($(this.description), false);
                firstInvalidElement = this.description;
            } else {
                showFeedBack($(this.description), true);
            }
            if (!isValid) {
                console.log("Valid falso");
                firstInvalidElement.focus();
            } else {
                console.log("Valid bueno");
                handlerAdd(this.name.value, this.description.value);
            }
            event.preventDefault();
            event.stopPropagation();
        });

        form.addEventListener('reset', (function (event) {
            let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
            feedDivs.removeClass('d-block').addClass('d-none');
            let inputs = $(this).find('input');
            inputs.removeClass('is-valid is-invalid');
        }));

        $(form.name).change(defaultCheckElement);
        $(form.description).change(defaultCheckElement);

    }
    else if (document.forms.removeCategory) {
        let form = document.forms.removeCategory;
        $(form).attr('novalidate', true);
        $(form).submit(function (event) {
            let isValid = true;
            let firstInvalidElement = null;

            if (this.selecEliminateCategory.value == "") {
                isValid = false;
                showFeedBack($(this.selecEliminateCategory), false);
                firstInvalidElement = this.selecEliminateCategory;
            } else {
                showFeedBack($(this.selecEliminateCategory), true);
            }

            if (!isValid) {
                firstInvalidElement.focus();
            } else {
                let categories = [];
                for (const option of this.selecEliminateCategory.options) {
                    if (option.selected) {
                        categories.push(option.value);
                    }
                }
                handlerRem(categories);
            }
            event.preventDefault();
            event.stopPropagation();
        });

        form.addEventListener('reset', (function (event) {
            let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
            feedDivs.removeClass('d-block').addClass('d-none');
            let inputs = $(this).find('input');
            inputs.removeClass('is-valid is-invalid');
        }));

        $(form.name).change(defaultCheckElement);
        $(form.description).change(defaultCheckElement);
    }




}
function addPersonValidation(handler) {
    let form = document.forms.newPersonForm;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        console.log("Entro submit");
        let isValid = true;
        let firstInvalidElement = null;

        // this.title.value = this.title.value.trim();
        // showFeedBack($(this.title), true);
        if (!this.name.checkValidity()) {
            isValid = false;
            showFeedBack($(this.name), false);
            firstInvalidElement = this.name;
        } else {
            showFeedBack($(this.name), true);
        }
        if (!this.lastname1.checkValidity()) {
            isValid = false;
            showFeedBack($(this.lastname1), false);
            firstInvalidElement = this.lastname1;
        } else {
            showFeedBack($(this.lastname1), true);
        }

        if (!this.lastname2.checkValidity()) {
            isValid = false;
            showFeedBack($(this.lastname2), false);
            firstInvalidElement = this.lastname2;
        } else {
            showFeedBack($(this.lastname2), true);
        }
        if (this.born.value == "") {
            isValid = false;
            showFeedBack($(this.born), false);
            firstInvalidElement = this.born;
        } else {
            showFeedBack($(this.born), true);
        }
        if (this.selecType.value == "") {
            isValid = false;
            showFeedBack($(this.selecType), false);
            firstInvalidElement = this.selecType;
        } else {
            showFeedBack($(this.selecType), true);
        }
        let size = 1024;
        if (this.picture.value != "") {
            if (!checkFileExtension(this.picture.files[0], ['jpg', 'png', 'gif'])) {
                isValid = false;
                firstInvalidElement = this.picture;
                let message = 'Debe seleccionar un archivo con extensión jpg, png o gif.';
                showFeedBack($(this.picture), false, message);
            } else if (checkFileSize(this.picture.files[0], size)) {
                isValid = false;
                firstInvalidElement = this.picture;
                let message = `El archivo ${this.picture.files[0].name} no debe ser mayor a ${size}KB`;
                showFeedBack($(this.picture), false, message);
            } else {
                let message = "Imagen bien introducida."
                showFeedBack($(this.picture), true, message);
            }
        }

        let img;
        if (this.picture.value != "") {
            img = "img/" + this.picture.files[0].name;
        }
        else {
            img = "";
        }
        console.log("Imagen" + img);
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            console.log("Es valido");
            handler(this.name.value, this.lastname1.value, this.born.value, this.selecType.value, this.lastname2.value, img);
        }
        event.preventDefault();
        event.stopPropagation();
    });

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-valid is-invalid');
    }));

    $(form.name).change(defaultCheckElement);
    $(form.lastname1).change(defaultCheckElement);
    $(form.lastname2).change(defaultCheckElement);
    $(form.born).change(defaultCheckElement);
    $(form.picture).change(function (event) {
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
function removePersonValidation(handler) {
    selecTypePerson;
    selecPers;
    let form = document.forms.removePersonForm;
    $(form).attr('novalidate', true);
    $(form).unbind();
    $(form).submit(function (event) {
        console.log("Entro submit");
        let isValid = true;
        let firstInvalidElement = null;

        if (this.selecTypePerson.value == "") {
            isValid = false;
            showFeedBack($(this.selecTypePerson), false);
            firstInvalidElement = this.selecTypePerson;
        } else {
            showFeedBack($(this.selecTypePerson), true);
        }
        if (this.selecPers.value == "") {
            isValid = false;
            showFeedBack($(this.selecPers), false);
            firstInvalidElement = this.selecPers;
        } else {
            showFeedBack($(this.selecPers), true);
        }

        if (!isValid) {
            console.log("No es valido");
            firstInvalidElement.focus();
        } else {
            console.log("Es valido");
            let persons = [];
            for (const option of this.selecPers.options) {
                if (option.selected) {
                    persons.push(option.value);
                }
            }
            handler(this.selecTypePerson.value, persons);
        }
        event.preventDefault();
        event.stopPropagation();
    });

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-valid is-invalid');
    }));
    $(form.selecTypePerson).change(defaultCheckElement);
    $(form.selecPers).change(defaultCheckElement);
}
function loginValidation(handler) {

    let form = document.forms.loginForm;
    $(form).attr('novalidate', true);
    $(form).unbind();
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.user.checkValidity()) {
            isValid = false;
            showFeedBack($(this.user), false);
            firstInvalidElement = this.user;
        } else {
            showFeedBack($(this.user), true);
        }
        if (!this.password.checkValidity()) {
            isValid = false;
            showFeedBack($(this.password), false);
            firstInvalidElement = this.password;
        } else {
            showFeedBack($(this.password), true);
        }

        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.user.value, this.password.value);
        }
        event.preventDefault();
        event.stopPropagation();
        form.addEventListener('reset', (function (event) {
            let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
            feedDivs.removeClass('d-block').addClass('d-none');
            let inputs = $(this).find('input');
            inputs.removeClass('is-valid is-invalid');
        }));
        $(form.user).change(defaultCheckElement);
        $(form.password).change(defaultCheckElement);
    });
}
export {
    showFeedBack, defaultCheckElement, newProductionValidation, removeProductionValidation,
    assignDeassignPersonValidation, addRemoveCategoriesValidation, addPersonValidation,
    removePersonValidation, loginValidation
};