<?php
use PHPUnit\Framework\TestCase;
use App\Math;

class MathTest extends TestCase
{
    public function testAddition()
    {
        $math = new Math();
        $this->assertEquals(5, $math->addition(2, 3));
    }
} 