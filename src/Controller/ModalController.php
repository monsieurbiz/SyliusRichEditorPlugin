<?php
declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\Controller;

use Monsieurbiz\SyliusCmsPlugin\Exception\UndefinedUiElementTypeException;
use Monsieurbiz\SyliusCmsPlugin\UiElement\Factory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Response;

class ModalController extends AbstractController
{
    /** @var EngineInterface */
    private $templatingEngine;

    /** @var Factory */
    private $factory;

    /**
     * ModalController constructor.
     * @param EngineInterface $templatingEngine
     * @param Factory $factory
     */
    public function __construct(
        EngineInterface $templatingEngine,
        Factory $factory
    ) {
        $this->templatingEngine = $templatingEngine;
        $this->factory = $factory;
    }

    /**
     * Generate the form and render the edit markup
     *
     * @param Request $request
     * @return Response
     */
    public function formAction(Request $request): Response
    {
        // Check request
        $data = $request->query->get('data') ?? null;
        if (!$request->isXmlHttpRequest() || empty($data)) {
            throw $this->createNotFoundException();
        }

        // Correct JSON decode data
        $data = json_decode($data, true);
        if (!isset($data['type']) || !isset($data['fields'])) {
            throw $this->createNotFoundException();
        }

        try {
            $uiElement = $this->factory->getUiElementByType($data['type']);
        } catch (UndefinedUiElementTypeException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create form depending on UI Element with data
        $form = $this->createForm($uiElement->getFormClass(), $data['fields']);

        return $this->templatingEngine->renderResponse('@MonsieurbizSyliusCmsPlugin/Admin/Modal/edit.html.twig', [
            'form' => $form->createView(),
            'uiElement' => $uiElement,
            'data' => $data['fields'],
        ]);
    }

}
