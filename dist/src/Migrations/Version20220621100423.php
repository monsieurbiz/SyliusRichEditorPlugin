<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE.txt
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220621100423 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Change length of messenger_messages.queue_name column and create missing indexes, cf https://github.com/Sylius/Sylius/issues/13838';
    }

    public function up(Schema $schema): void
    {
        if ($schema->hasTable('messenger_messages')) {
            $this->addSql('ALTER TABLE messenger_messages CHANGE queue_name queue_name VARCHAR(190) NOT NULL');
            if (!$this->tableHasIndexOnColumns('messenger_messages', ['queue_name'])) {
                $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0 ON messenger_messages (queue_name)');
            }
            if (!$this->tableHasIndexOnColumns('messenger_messages', ['available_at'])) {
                $this->addSql('CREATE INDEX IDX_75EA56E0E3BD61CE ON messenger_messages (available_at)');
            }
        }
    }

    public function down(Schema $schema): void
    {
        if ($schema->hasTable('messenger_messages')) {
            if ($this->tableHasIndexOnColumns('messenger_messages', ['queue_name'])) {
                $this->addSql('DROP INDEX IDX_75EA56E0FB7336F0 ON messenger_messages');
            }
            if ($this->tableHasIndexOnColumns('messenger_messages', ['available_at'])) {
                $this->addSql('DROP INDEX IDX_75EA56E0E3BD61CE ON messenger_messages');
            }
            $this->addSql('ALTER TABLE messenger_messages CHANGE queue_name queue_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        }
    }

    private function tableHasIndexOnColumns(string $table, array $columns): bool
    {
        $indexes = $this->connection->getSchemaManager()->listTableIndexes($table);
        foreach ($indexes as $index) {
            foreach ($index->getColumns() as $column) {
                // Another column exists in index
                if (($key = array_search($column, $columns, true)) === false) {
                    continue 2;
                }
                unset($columns[$key]);
            }
        }

        // Table has all columns in index if the given array in empty at the end
        return empty($columns);
    }
}
