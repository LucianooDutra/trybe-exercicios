class Tv:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            print("volume no máximo")

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else:
            print("volume no mínimo")

    def modificar_canal(self, canal):
        if canal >= 1 and canal <= 99:
            self.__canal = canal
        else:
            raise ValueError(f"Valor {canal}, está fora da lista")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


tv_01 = Tv(49)

tv_01.ligar_desligar()
tv_01.aumentar_volume()
tv_01.diminuir_volume()
tv_01.modificar_canal(55)
tv_01.ligar_desligar()
