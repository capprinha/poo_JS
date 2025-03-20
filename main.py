class Carro(object):
    def __init__(self, modelo, frabricante, ano):
        self.modelo = modelo
        self.frabricante = frabricante
        self.ano = ano

    def acelerar(self):
        print('vrumm')

hb20 = Carro(modelo='HB20', frabricante="Hyunda", ano=2020)

