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

  shellHook = ''
    echo "🔧 Starting PostgreSQL container..."
    
    docker ps | grep -q postgres || docker run --rm -d \
      --name dev-postgres \
      -e POSTGRES_USER=dev \
      -e POSTGRES_PASSWORD=devpass \
      -e POSTGRES_DB=mydb \
      -p 5432:5432 \
      -v ~/Code/cms/database/postgressdata:/var/lib/postgresql/data \
      postgres:15

    echo "✅ PostgreSQL is running on port 5432 (user: dev, pass: devpass, db: mydb)"
  '';
}
