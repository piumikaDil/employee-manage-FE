import { CustomerController } from "../controller/CustomerController.js";
import { ItemController } from "../controller/ItemController.js";

export class Alert {
  saveUpdateAlert(vale, value2) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: vale + " has been " + value2,
      showConfirmButton: false,
      timer: 2500,
    });
  }

  unSucsessUpdateAlert(vale) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: vale + "Updated Unsuccessfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  yesNoAlertDelete(value) {
    console.log(value);
    Swal.fire({
      title: "Do you want to Delete the \n" + value + " ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        if (new CustomerController().deleteCustomer(value)) {
          new CustomerController().clearCDTextFields()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          $(this).remove();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Delete Unsuccessfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else if (result.isDenied) {
        Swal.fire(value + " Delete Canceled!", "", "info");
      }
    });
  }

  yesNoAlertSiteDelete(value) {
    console.log(value);
    Swal.fire({
      title: "Do you want to Delete the \n" + value + " ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        if (new ItemController().deleteItems(value)) {
          new ItemController().generateItemID()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          $(this).remove();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Delete Unsuccessfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else if (result.isDenied) {
        Swal.fire(value + " Delete Canceled!", "", "info");
      }
    });
  }

  yesNoAlertIDelete(value) {
    Swal.fire({
      title: "Do you want to Delete the \n" + value + " ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (deleteItems(value)) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          $(this).remove();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Delete Unsuccessfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else if (result.isDenied) {
        Swal.fire(value + " Delete Canceled!", "", "info");
      }
    });
  }

  emptyMassage() {
    let timerInterval;
    Swal.fire({
      title: "Empty Result!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
}

new Alert();
