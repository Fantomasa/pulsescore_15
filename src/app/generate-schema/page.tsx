"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { toast } from "sonner";

const jsonToTS = (json: string): string => {
  const formatPropertyName = (name: string): string => {
    if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
      return name;
    }
    return `'${name.replace(/'/g, "\\'")}'`;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const generateSchema = (obj: any, indent: string = ""): string => {
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return "any[]";
      }
      const itemTypes = obj.map((item) => generateSchema(item, indent + "  "));
      const uniqueTypes = Array.from(new Set(itemTypes));
      if (uniqueTypes.length === 1) {
        return `${uniqueTypes[0]}[]`;
      } else {
        return `Array<${uniqueTypes.join(" | ")}>`;
      }
    } else if (typeof obj === "object" && obj !== null) {
      const properties = Object.entries(obj).map(([key, value]) => {
        const propertyType = generateSchema(value, indent + "  ");
        const formattedKey = formatPropertyName(key);
        return `${indent}  ${formattedKey}: ${propertyType};`;
      });
      return `{\n${properties.join("\n")}\n${indent}}`;
    } else if (typeof obj === "string") {
      return "string";
    } else if (typeof obj === "number") {
      return "number";
    } else if (typeof obj === "boolean") {
      return "boolean";
    } else if (obj === null) {
      return "null";
    } else {
      return "any";
    }
  };

  try {
    const parsedJSON = JSON.parse(json);
    return `type GeneratedSchema = ${generateSchema(parsedJSON)};`;
  } catch (error) {
    //
    if (typeof error === typeof Error) {
    }
    return "Invalid JSON input";
  }
};

export default function JsonToTsPage() {
  const [jsonInput, setJsonInput] = useState("");
  const [tsOutput, setTsOutput] = useState("");

  const handleGenerate = () => {
    const schema = jsonToTS(jsonInput);
    setTsOutput(schema);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tsOutput);
    // toast.success("Copied to clipboard!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">JSON to TypeScript Schema Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>JSON Input</CardTitle>
            <CardDescription>Paste your JSON here</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder="Paste your JSON here"
              className="h-64"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>TypeScript Schema</CardTitle>
            <CardDescription>Generated TypeScript schema</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea value={tsOutput} readOnly className="h-64" />
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <Button onClick={handleGenerate}>Generate Schema</Button>
        <Button onClick={handleCopy} disabled={!tsOutput}>
          Copy Schema
        </Button>
      </div>
    </div>
  );
}
