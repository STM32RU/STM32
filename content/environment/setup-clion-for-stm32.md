---
title: Настройка IDE CLion
---

Источник: [@stm32std](https://t.me/stm32std)\
Автор: [@leech001](https://t.me/leech001)

# Установка IDE Clion в Windows 10

Переходим на сайт компании **JetBrains** скачиваем и устанавливаем по умолчанию среду **CLion** https://www.jetbrains.com/clion/download/

После установки необходимо произвести минимальные настройки для работы с **STM32**:
1. Переходим в настройки среды, где скачиваем и устанавливаем
**MinGW** (все по умолчанию).
![1](/tutorials/setup_clion_for_stm32/1.png)

2. После установки везде в **Toolchains** оставляем все по умолчанию
кроме **Debugger**.
![2](/tutorials/setup_clion_for_stm32/2.png)

3. Скачиваем и устанавливаем **GNU Embedded Toolchain for ARM** по
адресу https://developer.arm.com/tools-and-software/open-sourcesoftware/developer-tools/gnu-toolchain/gnu-rm/downloads для Windows.

4. Прописываем в **Debugger** путь до **arm-none-eabi-gdb.exe**
![3](/tutorials/setup_clion_for_stm32/3.png)

5. Переходим в раздел **Embedded Development**
![4](/tutorials/setup_clion_for_stm32/4.png)

6. Скачиваем и устанавливаем **OpenOCD** https://gnutoolchains.com/armeabi/openocd/

7. Прописываем в **OpenOCD Location** путь до **openocd.exe**
![5](/tutorials/setup_clion_for_stm32/5.png)

8. Скачиваем и устанавливаем **STM32CubeMX**
https://www.st.com/en/development-tools/stm32cubemx.html

9. Прописываем в **STM32CubeMX Location** путь до
**STM32CubeMX.exe**
![6](/tutorials/setup_clion_for_stm32/6.png)

На этом настройка **Clion** для работы с **STM32** завершена.

## Работа с Clion для STM32

1. Создаете проект в **STM32CubeMX** для вашего типа микроконтроллера.

2. В **Project Manager** устанавливаем тип IDE **STM32CubeIDE** и
генерируем проект.
![7](/tutorials/setup_clion_for_stm32/7.png)

3. Открываем проект в **Clion**
![8](/tutorials/setup_clion_for_stm32/8.png)

4. Автоматически **Clion** определяет тип микропроцессора и генерирует
**CMakeList**

5. Настраиваем конфигурацию вашего отладчика для OpenOCD в примере
отладчик ST-LINK v.2 микроконтроллер STM32F103C8T6 (bluepill)
![9](/tutorials/setup_clion_for_stm32/9.png)

Конфигурации для вашего микроконтроллера и отладчика ищем через
**Assistant** в директории с OpenOCD или в (..OpenOCD-20191216-
0.10.0\share\openocd\scripts\board\\).

Собственно, на этом работа по настройке отладчика для проекта
закончена.

Не забываем в случае наличия ошибок при компиляции проекта
периодически особенно после подключения заголовочных файлов ***.h**
сбрасывать кэш и перегенерировать проект.
![10](/tutorials/setup_clion_for_stm32/10.png)

В случае использования FreeRTOS и появлении ошибок при
компиляции в конфигурационном файле CMakeLists_template.txt снимите
комментарии со следующих строк.

```shell
#Uncomment for hardware floating point
SET(FPU_FLAGS "-mfloat-abi=hard -mfpu=fpv4-sp-d16")
add_definitions(-DARM_MATH_CM4 -DARM_MATH_MATRIX_CHECK -DARM_MATH_ROUNDING
-D__FPU_PRESENT=1)
```
и перегенерируйте проект (см. абзац выше).

# Установка IDE Clion в Linux Ubuntu 20.10

1. Устанавливаем Cmake
```bash
sudo apt-get install cmake
```
2. Устанавливаем ARM Toolchain
```bash
sudo apt-get -y install gcc-arm-none-eabi
```
3. Устанавливаем OpenOCD
```bash
sudo apt install openocd
```
4. Устанавливаем Java JRE
```bash
sudo apt install openjdk-15-jre
```
5. Устанавливаем поддержку ST-Link
```bash
sudo apt install stlink-tools
```
6. Скачиваем и устанавливаем STM32CubeMX
https://www.st.com/en/development-tools/stm32cubemx.html#get-software

7. Скачиваем и устанавливаем Jetbrains ToolBox
https://www.jetbrains.com/ru-ru/toolbox-app/

8. Устанавливаем через Jetbrains ToolBox Clion

9. Запускаем Clion и заходим в его настройки
![11](/tutorials/setup_clion_for_stm32/11.png)
Проверяем что Toolchains у нас настроен и доступен
![12](/tutorials/setup_clion_for_stm32/12.png)
Проверяем что Embedded Development корректно видит все составляющие.
В случае необходимости подсовываем ему пути куда установили компоненты.

10. Создаете проект в STM32CubeMX для вашего типа микроконтроллера
В **Project Manager** устанавливаем тип IDE **STM32CubeIDE** и генерируем
проект
![13](/tutorials/setup_clion_for_stm32/13.png)

11. Открываем проект, подготовленный с использованием STM32CubeMX
![14](/tutorials/setup_clion_for_stm32/14.png)

12. Настраиваем OpenOCD под вашу плату
![15](/tutorials/setup_clion_for_stm32/15.png)
Добавляем конфигурацию OpenOCD и выбираем конфигурационный
файл для вашей платы.
![16](/tutorials/setup_clion_for_stm32/16.png)
На этом настройка закончена
![17](/tutorials/setup_clion_for_stm32/17.png)
С помощью волшебных кнопочек мы можем собирать, запускать или
отлаживать микроконтроллер.

**На этом вся настройка закончена. Удачной работы!**

**С уважением,**\
**Буланов Константин**\
**email: leech001@gmail.com**

