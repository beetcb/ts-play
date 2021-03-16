interface ShapeX {
  text: string
}

interface ShapeY {
  text: number
}

interface ShapeZ {
  text: boolean
}

function draw(shape: ShapeX):void
function draw(shape: ShapeY):void
function draw(shape: ShapeZ):void
function draw(shape: any):void {
} // OK


// Union
function drawUsingUnion(shape: ShapeX | ShapeY | ShapeZ): void {
  shape.text.slice()
} // Property 'slice' does not exist on type 'string | number | boolean'.
  // Property 'slice' does not exist on type 'number'.