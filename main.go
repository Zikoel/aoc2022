package main

import (
	"aoc-2021/days/day01"
	"flag"
	"fmt"
	"io"
	"log"
	"os"
)

func main() {
	var day string = ""
	var file string = ""

	flag.StringVar(&day, "day", "", "day to run")
	flag.StringVar(&day, "d", "", "day to run (shorthand)")
	flag.StringVar(&file, "file", "", "file to  read input from")
	flag.StringVar(&file, "f", "", "file to  read input from (shorthand)")

	flag.Parse()

	if day == "" {
		flag.Usage()
		os.Exit(1)
	}

	var data []byte
	var err error
	if file == "" {
		data, err = io.ReadAll(os.Stdin)
	} else if file != "" {
		data, err = os.ReadFile(file)
	}

	if err != nil {
		log.Fatal("Impossible read input")
	}

	switch day {
	case "01":
		day01.Run(data)
	case "01e02":
		day01.Run2(data)
	// case "02":
	// 	day02.Run(data)
	// case "02e02":
	// 	day02.Run2(data)
	// case "03":
	// 	day03.Run(data)
	// case "03e02":
	// 	day03.Run2(data)
	// case "04":
	// 	day04.Run(data)
	// case "05":
	// 	day05.Run(data)
	// case "05e02":
	// 	day05.Run2(data)
	// case "06":
	// 	day06.Run(data)
	// case "07":
	// 	day07.Run(data)
	// case "07e02":
	// 	day07.Run2(data)
	// case "08":
	// 	day08.Run(data)
	// case "08e02":
	// 	day08.Run2(data)
	// case "09":
	// 	day09.Run(data)
	// case "09e02":
	// 	day09.Run2(data)
	// case "10":
	// 	day10.Run(data)
	// case "10e02":
	// 	day10.Run2(data)
	// case "11":
	// 	day11.Run(data)
	// case "12":
	// 	day12.Run(data)
	// case "13":
	// 	day13.Run(data)
	// case "13e02":
	// 	day13.Run2(data)
	// case "14":
	// 	day14.Run(data)
	// case "14e02":
	// 	day14.Run2(data)
	// case "15":
	// 	// day15.Run(data)
	// case "16":
	// 	day16.Run(data)
	// case "20":
	// 	day20.Run(data)
	// case "21":
	// 	day21.Run(data)
	// case "22":
	// 	day22.Run(data)
	default:
		fmt.Println("Day not present")
	}
}
