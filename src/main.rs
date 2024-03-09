use crate::shapes::{rectangle::Rectangle, circle::Circle, area::Area};

mod shapes;

fn main() {
    let rect = Rectangle::default();

    let circ = Rectangle::default();

    println!("{}", rect);

    println!("{}", circ.area());
}
