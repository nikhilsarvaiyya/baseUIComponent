import { Component ,TemplateRef} from '@angular/core';
import { ToastService } from './toast.service'; 
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent {
  show = true;
  constructor(public toastService : ToastService){

  }
  isTemplate(toast : any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

  close() {
		this.show = false;
		setTimeout(() => (this.show = true), 3000);
	}



// this.toastService.show('I am a standard toast');
// this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
// this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });


}
