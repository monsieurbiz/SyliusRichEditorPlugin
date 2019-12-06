<?php
declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Response;

class ModalController extends AbstractController
{
    /** @var EngineInterface */
    private $templatingEngine;

    /**
     * ModalController constructor.
     * @param EngineInterface $templatingEngine
     */
    public function __construct(
        EngineInterface $templatingEngine
    ) {
        $this->templatingEngine = $templatingEngine;
    }

    /**
     * Generate the form and render the edit markup
     *
     * @param Request $request
     * @return Response
     */
    public function formAction(Request $request): Response
    {
        if (!$request->isXmlHttpRequest()) {
            throw $this->createNotFoundException();
        }
        return $this->templatingEngine->renderResponse('@MonsieurbizSyliusCmsPlugin/Admin/Modal/edit.html.twig', [
            'form' => null,
        ]);
    }

}
