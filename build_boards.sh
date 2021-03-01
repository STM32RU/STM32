#!/bin/bash

find ./content/boards/* | grep -v _index.md | xargs rm -rf

for f in $(ls ./data/boards/**/*.yaml); do 
    dir=$(echo $f | sed "s/^\.\/data\/boards\/\(.*\)\/\(.*\).yaml$/\1/");
    file=$(echo $f | sed "s/^\.\/data\/boards\/\(.*\)\/\(.*\).yaml$/\2/");
    if [ ! -d "./content/boards/$dir" ] 
    then
        mkdir "./content/boards/$dir";
    fi

    path="./content/boards/$dir/$file.md";
    if [ ! -d $path ] 
    then
        echo "$dir/$file";
        echo "---" >> "$path";
        name=$(grep -oP -m 1 "name:\s+(.*)$" "$f" | sed "s/^name:\\s*\(.*\)$/\1/");
        echo "title: $name" >> "$path";
        echo "geekdocHidden: true" >> "$path";
        echo "---" >> "$path";
        echo "" >> "$path";
        echo "{{< board_page data=$.Site.Data.boards.$dir.$file >}}" >> "$path";
    fi
done