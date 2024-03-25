class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
/*
STACK(PILA)
Metodos:
Push:Añade un elemento y lo coloca al final de la lista.
Pop:Elimina el ultimo elemento añadido.
Peek:visualiza el ultimo elemento de la lista.

QUEUE(COLA)
Metodos:
Enqueue:Añade un elemento y lo coloca al final de la lista.
Dequeue:Elimina el primer elemento añadido.
Peek:visualiza el primer elemento de la lista.
*/
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
        this.Length = 0;
    }
    Empty() {
        return this.size === 0;
    }
    Push(data) {
        let node = new Node(data);
        if (!(this.Empty())) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
        this.Length++;
    }
    Pop() {
        this.size--;
    }
    Peek() {
        if (this.Empty()) {
            console.log("La pila esta vacia.");
        } else {
            let Limit = this.Length - this.size;
            let current = this.head;
            for (let i = 0; i < Limit; i++) {
                current = current.next;
            }
            console.log(current.data);
        }
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.size = 0;
        this.Length = 1;
    }
    Empty() {
        return this.size === 0;
    }
    Enqueue(data) {
        let node = new Node(data);
        if (!(this.Empty())) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }
    Dequeue() {
        this.Length++;
    }
    Peek() {
        if (this.Empty() || this.Length>this.size) {
            console.log("La cola esta vacia.");
        } else {
            let current = this.head;
            for (let i = this.size; i > this.Length; i--) {
                current = current.next;
            }
            console.log(current.data);
        }
    }
}

/*let Lista = new Queue();
Lista.Enqueue({
    Nombre: "Carlos Rodriquez",
    Trabajo: "Policia"
});
Lista.Enqueue({
    Nombre: "Mario Mandela",
    Trabajo: "Profesor"
});
Lista.Enqueue({
    Nombre: "Karla Ortiz",
    Trabajo: "Bibliotecologa"
});
Lista.Enqueue({
    Nombre: "Eric Manson",
    Trabajo: "Enfermero"
});

Lista.Dequeue();


Lista.Peek();*/

let Lista = new Stack();
Lista.Push({
    Nombre: "Esteban Gonzalez",
    Trabajo: "Arquitecto"
});
Lista.Push({
    Nombre: "Marcos Guzman",
    Trabajo: "Ingeniero"
});
Lista.Push({
    Nombre: "Eric Manson",
    Trabajo: "Enfermero"
});
Lista.Pop();
Lista.Peek();

