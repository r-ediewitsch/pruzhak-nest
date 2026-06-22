-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Music" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "composer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concert" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Concert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MusicLineup" (
    "id" TEXT NOT NULL,
    "musicId" TEXT NOT NULL,
    "concertId" TEXT NOT NULL,
    "playOrder" INTEGER NOT NULL,

    CONSTRAINT "MusicLineup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtistLineup" (
    "id" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "concertId" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ArtistLineup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MusicLineup_concertId_musicId_playOrder_key" ON "MusicLineup"("concertId", "musicId", "playOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistLineup_concertId_artistId_role_key" ON "ArtistLineup"("concertId", "artistId", "role");

-- AddForeignKey
ALTER TABLE "MusicLineup" ADD CONSTRAINT "MusicLineup_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicLineup" ADD CONSTRAINT "MusicLineup_concertId_fkey" FOREIGN KEY ("concertId") REFERENCES "Concert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistLineup" ADD CONSTRAINT "ArtistLineup_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistLineup" ADD CONSTRAINT "ArtistLineup_concertId_fkey" FOREIGN KEY ("concertId") REFERENCES "Concert"("id") ON DELETE CASCADE ON UPDATE CASCADE;
