# shell.nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [ 
    pkgs.docker
    pkgs.docker-compose 
    pkgs.python3
    pkgs.python3Packages.flask
    pkgs.python3Packages.flask-cors
    pkgs.python3Packages.psycopg2
    pkgs.python3Packages.requests
    pkgs.beekeeper-studio
    pkgs.nodejs
  ];
}
