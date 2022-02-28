import { Project } from "ts-morph";

const project = new Project();
project.addDirectoryAtPath("./delete-me");
project.getDirectoryOrThrow("delete-me").delete();

project.saveSync();
