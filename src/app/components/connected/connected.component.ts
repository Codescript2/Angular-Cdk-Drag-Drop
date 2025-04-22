import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrl: './connected.component.scss',
  imports: [CdkDropList, CdkDrag]
})
export class ConnectedComponent {
  todo = ['Trabajar', 'Ir al supermercado', 'Llegar a casa temprano', 'Dormir 8 horas'];

  done = ['Levantarme temprano', 'Cepillarme', 'Ducharme', 'Revisar mi correo', 'Pasear al perro'];

  getConsole(reference: any) {
    console.log(reference);
  }

  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
