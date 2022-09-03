## Factory Pattern

- オブジェクト作成をカプセル化するクラスを定義する

```typescript
export class SimplePizzaFactory {
    createPizza(type: string){
        pizza: null | Pizza = null
        if (type === 'チーズ') {
            pizza = new CheesePizza();
        }
        else if (type === 'ペパロニ') {
            pizza = new PepperoniPizza();
        }
        else if {
            pizza = new NillPizza();
        }

        return pizza;
    }
}

interface Pizza {
    type: string
    constractor(type: string) {
        this.type = type
    }
}

```

-- 

## Pizza店をフランチャイズ化する
それぞれの地域によって異なるピザの種類を提供したい．
→ PizzaFactoryを外してそれぞれの地域専用のFactoryを作成する

```
NYPizzaFactory
ChicagoPizzaFactory
CaliforniaPizzaFactory
```

franchise化することでそれぞれの地域によって特有のピザを作れるようになった

```typescript
const factory = new NYPizzaFactory();
const pizza = factory.createPizza('cheeze')


const factory = new ChicagoPizzaFactory();
const pizza = factory.createPizza('cheeze')
```

????
as is: それぞれのフランチャイズ店はファクトリを使用してピザを作っているが
その他の工程では独自のやり方を採用してるので異なる方法で焼いたりピザを切り忘れたりしてしまう事象が発生している
????

結局ピザFactoryが独自のピザを作っていて，このピザが準備の工程の情報を持っている状態
この工程を順番に呼び出す必要があるが，これはそれぞれの店で行われる必要がある状態

これを手順はまとめてpreparePizza()に集約する．
PizzaStoreの抽象クラスに全てのお店で使われるべき手順に関する知識を持たせる

Pizzaの抽象クラスを作成してそれぞれの手順の中身も定義してしまう．(オーバーライドにより変更可能)


## 勘所
ピザ店はピザという概念を知っていて，ピザ店で扱われるピザはそのピザの定義に従わなければいけない
ここでピザ店はピザという概念のみを知る必要がある．のでピザの抽象クラスに依存しているということ．
だからピザの具象クラスに依存することはない．