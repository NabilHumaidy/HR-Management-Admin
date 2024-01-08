import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "./Data";

export default function SelectDashboard() {
  return (
    <div className="flex w-[190px]  gap-4 border rounded-lg">
      <Select 
        defaultSelectedKeys={["cat"]}
        className="max-w-xs" 
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
