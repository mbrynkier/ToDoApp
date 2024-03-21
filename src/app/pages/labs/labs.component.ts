import { Component, signal } from '@angular/core';
import{ CommonModule} from '@angular/common';
import{ FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a una aplicacion con Angular';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]);
  name = signal('Marcos');
  age = 33;
  disabled = true;
  img = 'https://www.serebii.net/pokearth/sprites/gold/113.png';

  person = signal({
    name: "Marcos",
    age: 33,
    avatar: 'https://www.serebii.net/pokearth/sprites/gold/113.png'
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable: true
  });

  nameCtrl = new FormControl('Marcos',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler(){
    alert('Hola');
  };

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState =>{
      return {
        ...prevState,
        name: newValue
      }
    })
    this.name.set(newValue);
    console.log(this.name());
  };

  changeAgeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = parseInt(input.value);
    this.person.update(prevState => {
      return {
        ...prevState,
        age: newValue
      }
    })
  };

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  };
}
