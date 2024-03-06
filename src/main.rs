fn main() {
    let mut items: Vec<Item> = vec![Item::Custom(Custom {
        age: 23, 
        name: "will".into(),
    })];
    append(&mut items)
}

fn append(items: &mut Vec<Item>) {
    items.push(Item::String("hello fem".into()));
}

struct Custom {
    age: usize,
    name: String,
}

enum Item {
    Number(usize),
    String(String),
    Custom(Custom),
}
