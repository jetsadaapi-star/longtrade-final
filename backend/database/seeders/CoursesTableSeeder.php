<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\Category;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure we have a category
        $category = Category::firstOrCreate(
            ['slug' => 'trading-basics'],
            ['name' => 'Trading Basics', 'description' => 'Basic trading courses']
        );

        $courses = [
            [
                'slug' => 'One-day-Gold-Trading',
                'title' => 'One day Gold Trading - คอร์สเร่งรัดเทรดทองเป็นใน 1 วัน',
                'cover' => '/courses/courses1.jpg',
                'hours' => '2 ชั่วโมง 40 นาที',
                'price' => 1990,
                'original_price' => 3990,
                'description' => 'One day Gold Trading - คอร์สเร่งรัดเทรดทองเป็นใน 1 วัน',
                'unlock_code' => 'LT-98989',
                'sections' => [
                    [
                        'id' => 'sec1',
                        'title' => '1.เทรดทองคืออะไร?',
                        'lessons' => [
                            ['id' => 'l1', 'title' => 'เทรดทองคืออะไร?', 'duration' => '9.45 นาที', 'videoId' => 'https://youtu.be/2i4PHWK-JO4', 'youtubeId' => '2i4PHWK-JO4'],
                        ],
                    ],
                    [
                        'id' => 'sec2',
                        'title' => '2.มือใหม่เริ่มเทรดทองต้องใช้อะไรบ้าง?',
                        'lessons' => [
                            ['id' => 'l2', 'title' => 'มือใหม่เริ่มเทรดทองต้องใช้อะไรบ้าง?', 'duration' => '10.58 นาที', 'videoId' => 'https://youtu.be/G7nrxtzWSCo', 'youtubeId' => 'G7nrxtzWSCo'],
                        ],
                    ],
                    [
                        'id' => 'sec3',
                        'title' => '3.เทรดทองคืออะไร?',
                        'lessons' => [
                            ['id' => 'l3', 'title' => 'ทุนเริ่มต้นเทรดทอง ใช้เงินกี่บาท?', 'duration' => '24.12 นาที', 'videoId' => 'https://youtu.be/gLRxBc7lr-4', 'youtubeId' => 'gLRxBc7lr-4'],
                        ],
                    ],
                    [
                        'id' => 'sec4',
                        'title' => '4.การเชื่อมต่อบัญชี และใช้งานโปรแกรมที่จำเป็น',
                        'lessons' => [
                            ['id' => 'l4', 'title' => 'การเชื่อมต่อบัญชี และใช้งานโปรแกรมที่จำเป็น', 'duration' => '22.00 นาที', 'videoId' => 'https://youtu.be/6OMhgW03w2c', 'youtubeId' => '6OMhgW03w2c'],
                        ],
                    ],
                    [
                        'id' => 'sec5',
                        'title' => '5.คำศัพท์เบื้องต้นที่ต้องรู้',
                        'lessons' => [
                            ['id' => 'l5', 'title' => 'คำศัพท์เบื้องต้นที่ต้องรู้', 'duration' => '30.42 นาที', 'videoId' => 'https://youtu.be/mLMCQQ-rA3w?si=sGvw3Ojh3K0OdEQ3', 'youtubeId' => 'mLMCQQ-rA3w'],
                        ],
                    ],
                    [
                        'id' => 'sec6',
                        'title' => '6.เทรดทองกำไรยังไง ขาดทุนยังไง?',
                        'lessons' => [
                            ['id' => 'l6', 'title' => 'เทรดทองกำไรยังไง ขาดทุนยังไง?', 'duration' => '16.35 นาที', 'videoId' => 'https://youtu.be/b8qkcWodvlI', 'youtubeId' => 'b8qkcWodvlI'],
                        ],
                    ],
                    [
                        'id' => 'sec7',
                        'title' => '7.เข้าสู่สนามจริง ( แบบมือใหม่ )',
                        'lessons' => [
                            ['id' => 'l7', 'title' => 'เข้าสู่สนามจริง ( แบบมือใหม่ )', 'duration' => '6.25 นาที', 'videoId' => 'https://youtu.be/PUJ9rBCIvAU', 'youtubeId' => 'PUJ9rBCIvAU'],
                        ],
                    ],
                    [
                        'id' => 'sec8',
                        'title' => '8.การวิเคราะห์กราฟและสร้าง Trading Plan',
                        'lessons' => [
                            ['id' => 'l8', 'title' => 'การวิเคราะห์กราฟและสร้าง Trading Plan', 'duration' => '28.47 นาที', 'videoId' => 'https://youtu.be/RJ12ZPBwCDM', 'youtubeId' => 'RJ12ZPBwCDM'],
                        ],
                    ],
                    [
                        'id' => 'sec9',
                        'title' => '9.Mindset ที่จำเป็นในการเทรด',
                        'lessons' => [
                            ['id' => 'l9', 'title' => 'Mindset ที่จำเป็นในการเทรด', 'duration' => '11.20 นาที', 'videoId' => 'https://youtu.be/7qR_rf7EpFI', 'youtubeId' => '7qR_rf7EpFI'],
                        ],
                    ],
                ],
                'quiz' => [
                    'passingScore' => 70,
                    'questions' => [
                        [
                            'id' => 'q1',
                            'title' => 'Git ใช้ทำอะไรหลักๆ?',
                            'q' => ['label' => 'Git ใช้ทำอะไรหลักๆ?'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'จัดการ Dependencies'],
                                ['id' => 'b', 'label' => 'จัดการเวอร์ชันโค้ด'],
                                ['id' => 'c', 'label' => 'รันเซิร์ฟเวอร์'],
                                ['id' => 'd', 'label' => 'บีบอัดภาพ'],
                            ],
                            'answerId' => 'b',
                        ],
                        [
                            'id' => 'q2',
                            'title' => 'คำสั่ง `useState` อยู่ในไลบรารีใด?',
                            'q' => ['label' => 'คำสั่ง `useState` อยู่ในไลบรารีใด?'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'React'],
                                ['id' => 'b', 'label' => 'Next.js'],
                                ['id' => 'c', 'label' => 'Node.js'],
                                ['id' => 'd', 'label' => 'Vite'],
                            ],
                            'answerId' => 'a',
                        ],
                        [
                            'id' => 'q3',
                            'title' => 'CSS Flexbox ใช้แก้ปัญหาแนวใดเป็นหลัก?',
                            'q' => ['label' => 'CSS Flexbox ใช้แก้ปัญหาแนวใดเป็นหลัก?'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'การจัดวาง Layout และจัดเรียงองค์ประกอบ'],
                                ['id' => 'b', 'label' => 'จัดการ Request'],
                                ['id' => 'c', 'label' => 'ทำแอนิเมชัน 3D'],
                                ['id' => 'd', 'label' => 'การทำ Routing'],
                            ],
                            'answerId' => 'a',
                        ],
                    ],
                ],
            ],
            [
                'slug' => 'Technic-30MBO',
                'title' => 'เทคนิคการเทรดท่า 30MBO - เรียบง่ายแต่ทรงพลัง',
                'cover' => '/courses/courses3.jpg',
                'hours' => '2 ชั่วโมง 40 นาที',
                'price' => 2990,
                'original_price' => 5990,
                'description' => 'เทคนิคการเทรดท่า 30MBO - เรียบง่ายแต่ทรงพลัง',
                'unlock_code' => 'LT-46466',
                'sections' => [
                    ['id' => 'p-sec1', 'title' => '1.30MBO คืออะไร', 'lessons' => [['id' => 'p1', 'title' => '30MBO คืออะไร', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/7Z2QutlUvgo', 'youtubeId' => '7Z2QutlUvgo']]],
                    ['id' => 'p-sec2', 'title' => '2.ขั้นตอนการใช้ท่าเทรดนี้', 'lessons' => [['id' => 'p2', 'title' => 'ขั้นตอนการใช้ท่าเทรดนี้', 'duration' => '30 นาที', 'videoId' => 'https://youtu.be/Ed4mRf3tI8o', 'youtubeId' => 'Ed4mRf3tI8o']]],
                    ['id' => 'p-sec3', 'title' => '3.ตัวอย่างการเข้าเทรดด้วยท่า 30MBO', 'lessons' => [['id' => 'p3', 'title' => 'ตัวอย่างการเข้าเทรดด้วยท่า 30MBO', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/9gvpG5_kA6U', 'youtubeId' => '9gvpG5_kA6U']]],
                    ['id' => 'p-sec4', 'title' => '4.เงื่อนไขสำคัญ', 'lessons' => [['id' => 'p4', 'title' => 'เงื่อนไขสำคัญ', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/hkss4Eu-TVA', 'youtubeId' => 'hkss4Eu-TVA']]],
                    ['id' => 'p-sec5', 'title' => '5.การตั้ง Stop loss และ Trailing stop Loss', 'lessons' => [['id' => 'p5', 'title' => 'การตั้ง Stop loss และ Trailing stop Loss', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/PWBhmf7-UJ8', 'youtubeId' => 'PWBhmf7-UJ8']]],
                    ['id' => 'p-sec6', 'title' => '6.สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้', 'lessons' => [['id' => 'p6', 'title' => 'สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้', 'duration' => '30 นาที', 'videoId' => 'https://youtu.be/srttoh_kT38', 'youtubeId' => 'srttoh_kT38']]],
                    ['id' => 'p-sec7', 'title' => '7.ตลาดที่เหมาะสมกับท่าเทรดนี้', 'lessons' => [['id' => 'p7', 'title' => 'ตลาดที่เหมาะสมกับท่าเทรดนี', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/ObySniX37n0', 'youtubeId' => 'ObySniX37n0']]],
                    ['id' => 'p-sec8', 'title' => '8.Case study ท่าเทรด 30MBO', 'lessons' => [['id' => 'p8', 'title' => 'Case study ท่าเทรด 30MBO', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/hTmIBf4dGEc', 'youtubeId' => 'hTmIBf4dGEc']]],
                ],
                'quiz' => [
                    'passingScore' => 70,
                    'questions' => [
                        [
                            'id' => 'py1',
                            'title' => 'Pandas ใช้โครงสร้างข้อมูลหลักชื่อว่าอะไร?',
                            'q' => ['label' => 'Pandas ใช้โครงสร้างข้อมูลหลักชื่อว่าอะไร?'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'Series / DataFrame'],
                                ['id' => 'b', 'label' => 'Tensor'],
                                ['id' => 'c', 'label' => 'RDB Table'],
                                ['id' => 'd', 'label' => 'Queue'],
                            ],
                            'answerId' => 'a',
                        ],
                        [
                            'id' => 'py2',
                            'title' => 'NumPy array โดดเด่นเรื่องใด?',
                            'q' => ['label' => 'NumPy array โดดเด่นเรื่องใด?'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'การเรนเดอร์กราฟ 3D'],
                                ['id' => 'b', 'label' => 'การคำนวณเชิงเวกเตอร์ประสิทธิภาพสูง'],
                                ['id' => 'c', 'label' => 'ทำเว็บเซิร์ฟเวอร์'],
                                ['id' => 'd', 'label' => 'จัดการสตรีมวิดีโอ'],
                            ],
                            'answerId' => 'b',
                        ],
                    ],
                ],
            ],
            [
                'slug' => 'Stochastic-Pop-Pop',
                'title' => 'Stochastic Pop - Pop แล้วไป! จังหวะไว กำไรแรง',
                'cover' => '/courses/courses2.jpg',
                'hours' => '2 ชั่วโมง 10 นาที',
                'price' => 2990,
                'original_price' => 5990,
                'description' => 'Stochastic Pop - Pop แล้วไป! จังหวะไว กำไรแรง',
                'unlock_code' => 'LT-19655',
                'sections' => [
                    ['id' => 'dm1', 'title' => 'Stochastic Pop คือ อะไร', 'lessons' => [['id' => 'dm1-1', 'title' => 'Stochastic Pop คือ อะไร', 'duration' => '15 นาที', 'videoId' => 'https://youtu.be/OoHiYiSwft0?si=ENKk1e5bZIxguOV_', 'youtubeId' => 'OoHiYiSwft0']]],
                    ['id' => 'dm2', 'title' => 'แนวคิดพื้นฐาน Stochastic Oscillator', 'lessons' => [['id' => 'dm1-2', 'title' => 'แนวคิดพื้นฐาน Stochastic Oscillator', 'duration' => '15 นาที', 'videoId' => 'https://youtu.be/lVgxXtZUxDY', 'youtubeId' => 'lVgxXtZUxDY']]],
                    ['id' => 'dm3', 'title' => 'แนวคิด Stochastic Pop (SP)', 'lessons' => [['id' => 'dm1-3', 'title' => 'แนวคิด Stochastic Pop (SP)', 'duration' => '15 นาที', 'videoId' => 'https://youtu.be/nNhY2pRIAV0', 'youtubeId' => 'nNhY2pRIAV0']]],
                    ['id' => 'dm4', 'title' => 'การเข้าเทรดด้วยท่า Stochastic Pop (SP)', 'lessons' => [['id' => 'dm1-4', 'title' => 'การเข้าเทรดด้วยท่า Stochastic Pop (SP)', 'duration' => '15 นาที', 'videoId' => 'https://youtu.be/UzfOdLmcI-4', 'youtubeId' => 'UzfOdLmcI-4']]],
                    ['id' => 'dm5', 'title' => 'สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้', 'lessons' => [['id' => 'dm1-5', 'title' => 'สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้', 'duration' => '15 นาที', 'videoId' => 'https://youtu.be/0Cfzbo5K2h8', 'youtubeId' => '0Cfzbo5K2h8']]],
                    ['id' => 'dm6', 'title' => 'กลยุทธ์ที่แนะนำเพิ่มเติม', 'lessons' => [['id' => 'dm1-6', 'title' => 'กลยุทธ์ที่แนะนำเพิ่มเติม', 'duration' => '15 นาที', 'videoId' => 'dQw4w9WgXcQ', 'youtubeId' => 'dQw4w9WgXcQ']]],
                    ['id' => 'dm7', 'title' => 'ตลาดที่เหมาะสมสำหรับการเทรดท่า SP', 'lessons' => [['id' => 'dm1-7', 'title' => 'ตลาดที่เหมาะสมสำหรับการเทรดท่า SP', 'duration' => '15 นาที', 'videoId' => 'https://youtu.be/KHiKrag2TmI', 'youtubeId' => 'KHiKrag2TmI']]],
                ],
                'quiz' => [
                    'passingScore' => 70,
                    'questions' => [
                        [
                            'id' => 'dmq1',
                            'title' => 'KPI ในดิจิทัลมาร์เก็ตติ้งควร…',
                            'q' => ['label' => 'KPI ในดิจิทัลมาร์เก็ตติ้งควร…'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'ชัดเจน/วัดได้/มีกรอบเวลา'],
                                ['id' => 'b', 'label' => 'กำหนดกว้างๆ'],
                                ['id' => 'c', 'label' => 'ไม่ต้องอิงเป้าธุรกิจ'],
                                ['id' => 'd', 'label' => 'วัดไม่ได้ก็ได้'],
                            ],
                            'answerId' => 'a',
                        ],
                    ],
                ],
            ],
            [
                'slug' => 'MACS',
                'title' => 'กลยุทธ์ MACS – “สร้างแผนเทรดให้ชนะตลาด',
                'cover' => '/courses/courses4.jpg',
                'hours' => '2 ชั่วโมง 30 นาที',
                'price' => 3990,
                'original_price' => 4900,
                'description' => 'ออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อที่ใช้งานง่าย',
                'unlock_code' => 'LT-88887',
                'sections' => [
                    ['id' => 'MA1', 'title' => '1.MACS คืออะไร', 'lessons' => [['id' => 'p1', 'title' => 'MACS คืออะไร', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/7Z2QutlUvgo', 'youtubeId' => '7Z2QutlUvgo']]],
                    ['id' => 'MA2', 'title' => '2.ขึ้นตอนการใช้ท่าเทรดนี้', 'lessons' => [['id' => 'p2', 'title' => 'ขึ้นตอนการใช้ท่าเทรดนี้', 'duration' => '30 นาที', 'videoId' => 'https://youtu.be/Ed4mRf3tI8o', 'youtubeId' => 'Ed4mRf3tI8o']]],
                    ['id' => 'MA3', 'title' => '3.ตัวอย่างกราเข้าเทรดด้วยท่า MACS', 'lessons' => [['id' => 'p3', 'title' => 'ตัวอย่างกราเข้าเทรดด้วยท่า MACS', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/9gvpG5_kA6U', 'youtubeId' => '9gvpG5_kA6U']]],
                    ['id' => 'MA4', 'title' => '4.เงื่อนไขสำคัญ', 'lessons' => [['id' => 'p4', 'title' => 'เงื่อนไขสำคัญ', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/hkss4Eu-TVA', 'youtubeId' => 'hkss4Eu-TVA']]],
                    ['id' => 'MA5', 'title' => '5.การตั้ง Stop loss และ Trailing stop Loss', 'lessons' => [['id' => 'p5', 'title' => 'การตั้ง Stop loss และ Trailing stop Loss', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/PWBhmf7-UJ8', 'youtubeId' => 'PWBhmf7-UJ8']]],
                    ['id' => 'MA6', 'title' => '6.กลยุทธ์ที่แนะนำเพิ่มเติม', 'lessons' => [['id' => 'p6', 'title' => 'กลยุทธ์ที่แนะนำเพิ่มเติม', 'duration' => '30 นาที', 'videoId' => 'https://youtu.be/srttoh_kT38', 'youtubeId' => 'srttoh_kT38']]],
                    ['id' => 'MA7', 'title' => '7.สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้', 'lessons' => [['id' => 'p7', 'title' => 'สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/ObySniX37n0', 'youtubeId' => 'ObySniX37n0']]],
                    ['id' => 'MA8', 'title' => '8.Case study ท่าเทรด MACS', 'lessons' => [['id' => 'p8', 'title' => 'Case study ท่าเทรด MACS', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/hTmIBf4dGEc', 'youtubeId' => 'hTmIBf4dGEc']]],
                ],
                'quiz' => [
                    'passingScore' => 70,
                    'questions' => [
                        [
                            'id' => 'uxq1',
                            'title' => 'Primary action ควร…',
                            'q' => ['label' => 'Primary action ควร…'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'วางเด่น/สม่ำเสมอ'],
                                ['id' => 'b', 'label' => 'สีเทาอ่อน'],
                                ['id' => 'c', 'label' => 'ซ่อนในเมนู'],
                                ['id' => 'd', 'label' => 'ตัวหนังสือเล็ก'],
                            ],
                            'answerId' => 'a',
                        ],
                    ],
                ],
            ],
            [
                'slug' => 'FIBONACCI-MASTERCLASS',
                'title' => 'FIBONACCI MASTERCLASS – ถอดรหัสจังหวะตลาดด้วยตัวเลขทองคำ',
                'cover' => '/courses/courses5.jpg',
                'hours' => '2 ชั่วโมง 20 นาที',
                'price' => 3990,
                'original_price' => 4900,
                'description' => 'หลักการลงทุนหุ้น วิเคราะห์ปัจจัยพื้นฐานและกราฟเทคนิค',
                'unlock_code' => 'LT-64646',
                'sections' => [
                    ['id' => 'MA1', 'title' => '1.แนะนำเรื่องฟีโบนัชชี', 'lessons' => [['id' => 'p1', 'title' => 'แนะนำเรื่องฟีโบนัชชี', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/7Z2QutlUvgo', 'youtubeId' => '7Z2QutlUvgo']]],
                    ['id' => 'MA2', 'title' => '2.ความจำเป็นในการเข้าใจและระบุแนวโน้มให้ถูกต้อง', 'lessons' => [['id' => 'p2', 'title' => 'ความจำเป็นในการเข้าใจและระบุแนวโน้มให้ถูกต้อง', 'duration' => '30 นาที', 'videoId' => 'https://youtu.be/Ed4mRf3tI8o', 'youtubeId' => 'Ed4mRf3tI8o']]],
                    ['id' => 'MA3', 'title' => '3.ระดับการย่อตัวของฟีโบนัชชี', 'lessons' => [['id' => 'p3', 'title' => 'ระดับการย่อตัวของฟีโบนัชชี', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/9gvpG5_kA6U', 'youtubeId' => '9gvpG5_kA6U']]],
                    ['id' => 'MA4', 'title' => '4.ระดับการคาดการณ์ของฟีโบนัชชี', 'lessons' => [['id' => 'p4', 'title' => 'ระดับการคาดการณ์ของฟีโบนัชชี', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/hkss4Eu-TVA', 'youtubeId' => 'hkss4Eu-TVA']]],
                    ['id' => 'MA5', 'title' => '5.พลังของการบรรจบกันของฟีโบนัชชี', 'lessons' => [['id' => 'p5', 'title' => 'พลังของการบรรจบกันของฟีโบนัชชี', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/PWBhmf7-UJ8', 'youtubeId' => 'PWBhmf7-UJ8']]],
                    ['id' => 'MA6', 'title' => '6.ช่วงเวลาที่เหมาะสมในการเปิดสถานะ', 'lessons' => [['id' => 'p6', 'title' => 'ช่วงเวลาที่เหมาะสมในการเปิดสถานะ', 'duration' => '30 นาที', 'videoId' => 'https://youtu.be/srttoh_kT38', 'youtubeId' => 'srttoh_kT38']]],
                    ['id' => 'MA7', 'title' => '7.วิธีการเพิ่มประสิทธิภาพของจุดเข้าเทรด', 'lessons' => [['id' => 'p7', 'title' => 'วิธีการเพิ่มประสิทธิภาพของจุดเข้าเทรด', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/ObySniX37n0', 'youtubeId' => 'ObySniX37n0']]],
                    ['id' => 'MA8', 'title' => '8.ศิลปะของการออกจากการเทรด', 'lessons' => [['id' => 'p8', 'title' => 'ศิลปะของการออกจากการเทรด', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/hTmIBf4dGEc', 'youtubeId' => 'hTmIBf4dGEc']]],
                    ['id' => 'MA9', 'title' => '9.การผสานกันอย่างยอดเยี่ยมระหว่างฟีโบนัชชีและคลื่นเอลเลียต', 'lessons' => [['id' => 'p9', 'title' => 'การผสานกันอย่างยอดเยี่ยมระหว่างฟีโบนัชชีและคลื่นเอลเลียต', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/PWBhmf7-UJ8', 'youtubeId' => 'PWBhmf7-UJ8']]],
                    ['id' => 'MA10', 'title' => '10.เคล็ดลับของการบริหารการเทรดที่ดีขึ้น', 'lessons' => [['id' => 'p10', 'title' => 'เคล็ดลับของการบริหารการเทรดที่ดีขึ้น', 'duration' => '30 นาที', 'videoId' => 'https://youtu.be/srttoh_kT38', 'youtubeId' => 'srttoh_kT38']]],
                    ['id' => 'MA11', 'title' => '11.ความผิดพลาดใหญ่ที่อาจทำให้คุณเสียเงินมากมาย', 'lessons' => [['id' => 'p11', 'title' => 'ความผิดพลาดใหญ่ที่อาจทำให้คุณเสียเงินมากมาย', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/ObySniX37n0', 'youtubeId' => 'ObySniX37n0']]],
                    ['id' => 'MA12', 'title' => '12.เครื่องมือฟีโบนัชชีที่ทรงพลังในการเทรดจริง', 'lessons' => [['id' => 'p12', 'title' => 'เครื่องมือฟีโบนัชชีที่ทรงพลังในการเทรดจริง', 'duration' => '10 นาที', 'videoId' => 'https://youtu.be/hTmIBf4dGEc', 'youtubeId' => 'hTmIBf4dGEc']]],
                ],
                'quiz' => [
                    'passingScore' => 70,
                    'questions' => [
                        [
                            'id' => 'stq1',
                            'title' => 'Stop loss มีไว้เพื่อ…',
                            'q' => ['label' => 'Stop loss มีไว้เพื่อ…'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'จำกัดความเสี่ยง'],
                                ['id' => 'b', 'label' => 'เพิ่มความเสี่ยง'],
                                ['id' => 'c', 'label' => 'ทำให้ออเดอร์ช้าลง'],
                                ['id' => 'd', 'label' => 'ดูกราฟสวยขึ้น'],
                            ],
                            'answerId' => 'a',
                        ],
                    ],
                ],
            ],
            [
                'slug' => '76Graph',
                'title' => 'ถอดรหัสแท่งเทียน 76 รูปแบบ – ทุกแท่งคือร่องรอยของเงิน… อยู่ที่คุณจะมองเห็นหรือไม่',
                'cover' => '/courses/courses6.jpg',
                'hours' => '1 ชั่วโมง 50 นาที',
                'price' => 3990,
                'original_price' => 4900,
                'description' => 'พื้นฐานคริปโต โทเค็น และการจัดการความเสี่ยง',
                'unlock_code' => 'LT-25939',
                'sections' => [
                    [
                        'id' => 'cb1',
                        'title' => 'Section 1 : ปูพื้นฐานสู่โลกของแท่งเทียน (Introduction)',
                        'lessons' => [
                            ['id' => 'cb1-1', 'title' => 'แนะนำบทเรียน (Introduction)', 'duration' => '20 นาที', 'videoId' => 'dQw4w9WgXcQ', 'youtubeId' => 'dQw4w9WgXcQ'],
                        ],
                    ],
                    // ... (Truncated for brevity, but would include all sections for this course)
                ],
                'quiz' => [
                    'passingScore' => 70,
                    'questions' => [
                        [
                            'id' => 'cbq1',
                            'title' => 'Cold wallet โดดเด่นเรื่อง…',
                            'q' => ['label' => 'Cold wallet โดดเด่นเรื่อง…'],
                            'choices' => [
                                ['id' => 'a', 'label' => 'ความปลอดภัยสูง'],
                                ['id' => 'b', 'label' => 'ใช้งานออนไลน์สะดวก'],
                                ['id' => 'c', 'label' => 'โอนเร็วที่สุด'],
                                ['id' => 'd', 'label' => 'จ่ายดอกเบี้ย'],
                            ],
                            'answerId' => 'a',
                        ],
                    ],
                ],
            ],
        ];

        foreach ($courses as $courseData) {
            Course::updateOrCreate(
                ['slug' => $courseData['slug']],
                array_merge($courseData, [
                    'category_id' => $category->id,
                    'is_published' => true,
                    'is_featured' => true,
                    'lessons_count' => count($courseData['sections']), // Approximate
                    'level' => 'beginner',
                ])
            );
        }
    }
}
