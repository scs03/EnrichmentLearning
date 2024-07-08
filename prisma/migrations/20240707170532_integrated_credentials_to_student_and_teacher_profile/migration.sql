/*
  Warnings:

  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `credentialsId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credentialsId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Student_userID_key` ON `Student`;

-- DropIndex
DROP INDEX `Teacher_userId_key` ON `Teacher`;

-- AlterTable
ALTER TABLE `Student` DROP COLUMN `password`,
    DROP COLUMN `userID`,
    ADD COLUMN `credentialsId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Teacher` DROP COLUMN `password`,
    DROP COLUMN `userId`,
    ADD COLUMN `credentialsId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_credentialsId_fkey` FOREIGN KEY (`credentialsId`) REFERENCES `Credentials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_credentialsId_fkey` FOREIGN KEY (`credentialsId`) REFERENCES `Credentials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
