#!/bin/bash

antlr4 -Dlanguage=Java -lib grammars -o lib -visitor -Xexact-output-dir grammars/ECMAScript.g4