<?php

namespace Tests;

use PHPUnit\Framework\TestCase;
use App\Calculator;

class CalculatorTest extends TestCase
{
    private Calculator $calculator;

    protected function setUp(): void
    {
        $this->calculator = new Calculator();
    }

    public function testAddition()
    {
        $this->assertEquals(4, $this->calculator->calculate('2 + 2'));
        $this->assertEquals(0, $this->calculator->calculate('-2 + 2'));
        $this->assertEquals(10.5, $this->calculator->calculate('5.5 + 5'));
    }

    public function testSoustraction()
    {
        $this->assertEquals(0, $this->calculator->calculate('2 - 2'));
        $this->assertEquals(-4, $this->calculator->calculate('-2 - 2'));
        $this->assertEquals(0.5, $this->calculator->calculate('5.5 - 5'));
    }

    public function testMultiplication()
    {
        $this->assertEquals(4, $this->calculator->calculate('2 * 2'));
        $this->assertEquals(-4, $this->calculator->calculate('-2 * 2'));
        $this->assertEquals(27.5, $this->calculator->calculate('5.5 * 5'));
    }

    public function testDivision()
    {
        $this->assertEquals(1, $this->calculator->calculate('2 / 2'));
        $this->assertEquals(-1, $this->calculator->calculate('-2 / 2'));
        $this->assertEquals(1.1, $this->calculator->calculate('5.5 / 5'));
    }

    public function testDivisionParZero()
    {
        $this->expectException(\Exception::class);
        $this->calculator->calculate('2 / 0');
    }

    // Bonus : Test pour une chaîne vide
    public function testChaineVide()
    {
        $this->expectException(\Exception::class);
        $this->calculator->calculate('');
    }
} 