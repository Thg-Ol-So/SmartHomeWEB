# Internet das Coisas (IoT) 

## Descrição

### Suponha que você foi contratado para automatizar uma casa e o dono gostaria de agendar o ligamento e desligamento de itens da casa por uma interface web.

### Os itens que devem ser ligados ou desligados conforme o agendamento programado são:

- Ventilador
- Luz da Sala
- Luz do Quarto
- Televisor

```sh

```
### A interface do utilizador (português europeu) ou interface de usuário (português brasileiro), no campo de desenho industrial da interação homem-máquina, é o espaço onde a interação entre humanos e máquinas ocorre. O objetivo desta interação é a operação e controle efetivos da máquina no lado do usuário e o feedback da máquina, que auxilia o operador na tomada de decisões operacionais. (wikipedia) 


```sh
Com o sistema é possível cadastrar agendamentos para ligar ou desligar os itens. 
Os dados de um agendamento compreende-se em: 
```

- Data: Dia, mês e ano que os itens vão ser ligados ou desligados.
- Hora: Horário que os itens vão ser ligados ou desligado.
- Estado do ventilador: Indica se o ventilador vai ser ligado ou desligado.
- Estado da luz da sala: Indica se a luz da sala vai ser ligado ou desligado.
- Estado da luz do quarto: Indica se a luz do quarto vai ser ligado ou desligado.

```sh

```
## Protótipo
![molde](https://user-images.githubusercontent.com/24957978/27361910-760e2268-55f8-11e7-8282-5ff6363cec06.png)

```sh

```
> O sistema deverá ser composto por um conjunto de Serviços que Utilizaram conceitos de WebService REST (back end) em Java com implementação de um banco de dado que faça a implementação com os seguintes serviços:

- Listagens de agendamentos. 
- Inclusão de agendamento.  
- Alteração de agendamento. 
- Exclusão de agendamento.
- Uma interface gráfica web (front-end) utilizando AngularJS e Bootstrap, conforme o protótipo.
- Um cliente em Java desktop que consuma o webservice e envie os comandos para o arduino via porta Serial no horário do angendamento.

```sh

```

## Esquema
![implementacao](https://user-images.githubusercontent.com/24957978/27362176-869f3e62-55fa-11e7-949c-26276b93558a.png)

```sh

```

# Front-end do Projeto finalizado!
![9](https://user-images.githubusercontent.com/24957978/27362261-2a84b8ae-55fb-11e7-9bf9-f08378b975e9.png)


